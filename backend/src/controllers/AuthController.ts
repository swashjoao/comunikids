import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../prisma';

export default {
    async register(req: Request, res: Response) {
        const { nome, email, senha } = req.body;

        try {
            const usuarioExistente = await prisma.usuario.findUnique({ where: { email } });
            if (usuarioExistente) return res.status(400).json({ error: 'Email já cadastrado' });

            const senhaHash = await bcrypt.hash(senha, 10);
            const novoUsuario = await prisma.usuario.create({
                data: { nome, email, senha: senhaHash }
            });

            return res.status(201).json({ id: novoUsuario.id, nome: novoUsuario.nome, email: novoUsuario.email });
        } catch (err) {
            return res.status(500).json({ error: 'Erro ao registrar usuário' });
        }
    },

    async login(req: Request, res: Response) {
        const { email, senha } = req.body;

        try {
            const usuario = await prisma.usuario.findUnique({ where: { email } });
            if (!usuario) return res.status(404).json({ error: 'Usuário não encontrado' });

            const senhaValida = await bcrypt.compare(senha, usuario.senha);
            if (!senhaValida) return res.status(401).json({ error: 'Senha inválida' });

            const token = jwt.sign({ id: usuario.id, email: usuario.email }, process.env.JWT_SECRET as string, {
                expiresIn: '7d'
            });

            return res.json({ token });
        } catch (err) {
            return res.status(500).json({ error: 'Erro ao fazer login' });
        }
    }
};
