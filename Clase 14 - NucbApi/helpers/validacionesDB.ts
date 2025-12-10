import type { IUser } from "../models/usuario.js"
import Usuario from "../models/usuario.js"

export const existeEmail = async (email: string): Promise<void> => {
    const emailExiste: IUser | null = await Usuario.findOne({ email })

    if (emailExiste) {
        throw new Error(`El correo: ${email} ya está registrado`)
    }
}