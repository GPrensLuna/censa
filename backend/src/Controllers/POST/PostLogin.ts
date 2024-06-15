import bcrypt from "bcrypt";
import { type Response, type Request } from "express";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import { serialize } from "cookie";
import { SECRETKEY } from "../../config";

const prisma = new PrismaClient();

export const PostLogin = async (req: Request, res: Response) => {
    // Recibe la información que es envía del Cliente
    const { email, password } = req.body;

    try {
        // Busca en la base de datos si el Usuario esta registrado
        const user = await prisma.user.findUnique({ where: { email } });

        // Verifica si el Usuario existe
        if (user) {
            // Si el Usuario existe verifica la contraseña
            const passwordMatch = await bcrypt.compare(password, user.password);

            //Compara la contraseña contraseña
            if (passwordMatch) {
                // Verifica si KEY
                if (!SECRETKEY) {
                    console.error("Error: SECRETKEY no está definido");
                    return res
                        .status(500)
                        .json({ error: "Error interno del servidor" });
                }

                //Responde con un token
                const token = jwt.sign(
                    {
                        name: user.name,
                        email: user.email,
                    },
                    SECRETKEY,
                    { expiresIn: "1h" }
                );

                //Responde con un Cookie para el Navegador
                const cookieOptions = {
                    httpOnly: true,
                    maxAge: 3600000,
                };
                const tokenCookie = serialize("token", token, cookieOptions);

                res.setHeader("Set-Cookie", tokenCookie);

                res.status(200).json({
                    message: "Inicio de sesión exitoso",
                    token,
                });
            } else {
                console.error("Contraseña incorrecta");
                res.status(401).json({ error: "Contraseña incorrecta" });
            }
        } else {
            console.error("Usuario no encontrado");
            res.status(404).json({ error: "Usuario no encontrado" });
        }
    } catch (error) {
        console.error("Error durante el inicio de sesión:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    } finally {
        await prisma.$disconnect(); // Desconectar el cliente de Prisma cuando hayamos terminado
    }
};
