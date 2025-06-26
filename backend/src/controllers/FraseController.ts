import { Request, Response } from 'express';
import prisma from '../prisma';

export default {
    async create(req: Request, res: Response) {
        const { texto, categoriaId } = req.body;
        const usuarioId = (req as any).user.id;

        if (!texto || !categoriaId) return res.status(400).json({ error: 'Texto e categoria são obrigatórios' });

        try {
            const frase = await prisma.frase.create({
                data: {
                    texto,
                    categoriaId,
                    usuarioId
                }
            });

            return res.status(201).json(frase);
        } catch (err) {
            return res.status(500).json({ error: 'Erro ao criar frase' });
        }
    },

    async remove(req: Request, res: Response) {
        const { id } = req.params;

        try {
            await prisma.frase.delete({ where: { id: Number(id) } });
            return res.json({ message: 'Frase removida com sucesso' });
        } catch (err) {
            return res.status(500).json({ error: 'Erro ao remover frase' });
        }
    }
};
