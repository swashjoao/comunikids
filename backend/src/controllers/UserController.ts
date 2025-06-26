import { Request, Response } from 'express';
import prisma from '../prisma';

export default {
    async list(req: Request, res: Response) {
        const usuarios = await prisma.usuario.findMany({
            select: {
                id: true,
                nome: true,
                email: true
            }
        });

        return res.json(usuarios);
    }
};
