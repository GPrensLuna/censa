"use server";

import { User } from "@prisma/client";
import * as bcrypt from "bcrypt";

import {
  compileActivationTemplate,
  compileResetPassTemplate,
  sendMail,
} from "../mail";

import { signJwt, verifyJwt } from "../jwt";
import prisma from "@/libs/db";

export async function registerUser(
  user: Omit<User, "id" | "emailVerified" | "image">
) {
  const result = await prisma.user.create({
    data: {
      ...user,
      password: await bcrypt.hash(user.password, 10),
    },
  });

  const jwtUserId = signJwt({
    id: result.id,
  });

  const activationUrl = `${process.env.NEXTAUTH_URL}/auth/activation/${jwtUserId}`;

  // Compilar el cuerpo del correo electrónico para la activación del usuario
  const body = compileActivationTemplate(user.firstName, activationUrl);

  // Enviar un correo electrónico de activación al usuario
  await sendMail({ to: user.email, subject: "Activate Your Account", body });

  // Retornar el resultado de la creación del usuario
  return result;
}

// Tipo de función para activar un usuario
type ActivateUserFunc = (
  jwtUserId: string
) => Promise<"userNotExist" | "alreadyActivated" | "success">;

// Función para activar un usuario
export const activateUser: ActivateUserFunc = async (jwtUserID) => {
  // Verificar el token JWT para obtener el ID del usuario
  const payload = verifyJwt(jwtUserID);
  const userId = payload?.id;

  // Buscar el usuario en la base de datos
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  // Si el usuario no existe, retornar "userNotExist"
  if (!user) return "userNotExist";

  // Si el usuario ya está activado, retornar "alreadyActivated"
  if (user.emailVerified) return "alreadyActivated";

  // Actualizar el campo emailVerified del usuario con la fecha actual
  const result = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      emailVerified: new Date(),
    },
  });

  // Retornar "success" si la activación tiene éxito
  return "success";
};

// Función para solicitar el restablecimiento de contraseña
export async function forgotPassword(email: string) {
  // Buscar un usuario en la base de datos con la dirección de correo electrónico proporcionada
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  // Si el usuario no existe, lanzar un error
  if (!user) throw new Error("The User Does Not Exist!");

  // Firmar un token JWT con el ID del usuario
  const jwtUserId = signJwt({
    id: user.id,
  });

  // Construir la URL de restablecimiento de contraseña usando el NEXTAUTH_URL del entorno y el token JWT
  const resetPassUrl = `${process.env.NEXTAUTH_URL}/auth/resetPass/${jwtUserId}`;

  // Compilar el cuerpo del correo electrónico para el restablecimiento de contraseña
  const body = compileResetPassTemplate(user.firstName
