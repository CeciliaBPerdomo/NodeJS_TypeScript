import { sendEmail } from "../mailer/mailer.js"
import type { IUser } from "../models/usuario.js"
import Usuario from "../models/usuario.js"

export const existeEmail = async (email: string): Promise<void> => {
    const emailExiste: IUser | null = await Usuario.findOne({ email })

    if (emailExiste && emailExiste.verified) {
        throw new Error(`El correo: ${email} ya está registrado`)
    }

    if (emailExiste && !emailExiste.verified) {
        await sendEmail(email, emailExiste.code as string)
        throw new Error(`El correo: ${email} ya está registrado. Se envío nuevamente el código de verificación`)
    }
}

export const existeUsuario = async (email: string): Promise<void> => {
    const usuario: IUser | null = await Usuario.findOne({ email })

    if (!usuario) {
        throw new Error(`El usuario con email: ${email} no está registrado`)
    }
}