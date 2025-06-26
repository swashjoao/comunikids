import { Request, Response } from 'express';
import prisma from '../prisma';

export default {
    // Criar frase (sem categoria)
    async create(req: Request, res: Response) {
        const { texto } = req.body;
        const usuarioId = (req as any).user.id;

        if (!texto) {
            return res.status(400).json({ error: 'Texto é obrigatório' });
        }

        try {
            const frase = await prisma.frase.create({
                data: {
                    texto,
                    usuarioId,
                },
            });

            return res.status(201).json(frase);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Erro ao criar frase' });
        }
    },

    // Listar frases do usuário logado
    async list(req: Request, res: Response) {
        const usuarioId = (req as any).user.id;

        try {
            const frases = await prisma.frase.findMany({
                where: { usuarioId },
                orderBy: { criadoEm: 'desc' },
            });

            return res.json(frases);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Erro ao buscar frases' });
        }
    },

    // Remover frase por ID
    async remove(req: Request, res: Response) {
        const { id } = req.params;

        try {
            await prisma.frase.delete({
                where: { id: Number(id) },
            });

            return res.json({ message: 'Frase removida com sucesso' });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Erro ao remover frase' });
        }
    },
};
