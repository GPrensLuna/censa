import { type Request, type Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const PostRegister = async (req: Request, res: Response) => {
    try {
        // Extraer los datos del cuerpo de la solicitud
        const { name, email, password } = req.body;
        console.log({ name, email, password });

        // Buscar si ya existe un usuario con el mismo correo electrónico
        const existingUser = await prisma.user.findUnique({
            where: { email: email },
        });

        if (existingUser) {
            return res
                .status(400)
                .json({ error: "El correo electrónico ya está registrado" });
        }

        // Cifrar la contraseña antes de guardarla en la base de datos
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear un nuevo usuario con los datos proporcionados en el cuerpo de la solicitud
        const newUser = await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: hashedPassword,
            },
        });

        // Enviar respuesta de éxito con el ID del nuevo usuario
        res.status(201).json({
            message: "Usuario registrado exitosamente",
            ID: newUser.id,
        });
    } catch (error: any) {
        // Capturar y manejar errores
        console.error("Error en el registro:", error);
        res.status(500).json({
            message: "Error en el registro",
            error: error.message,
        });
    } finally {
        await prisma.$disconnect(); // Desconectar el cliente de Prisma cuando hayamos terminado
    }
};
