import type { Request, Response } from "express";
import type { IUser } from "../models/usuario.js";
import Usuario from "../models/usuario.js";
import bcryptjs from "bcryptjs";
import { ROLES } from "../helpers/constants.js";
import randomstring from "randomstring"
import { sendEmail } from "../mailer/mailer.js";
import { generarJWT } from "../helpers/generarJWT.js";

export const register = async (req: Request, res: Response) => {
    const { nombre, email, password, rol }: IUser = req.body
    // console.log(nombre, email, password, rol)

    const usuario = new Usuario({
        nombre,
        email,
        password,
        rol
    })

    const salt = bcryptjs.genSaltSync()
    usuario.password = bcryptjs.hashSync(password, salt)

    // atraves de los headers le paso si es admin o no
    const adminKey = req.headers["admin-key"]
    if (adminKey === process.env.KEY_ADMIN) {
        usuario.rol = ROLES.admin
    }

    const newCode = randomstring.generate(6)
    usuario.code = newCode

    await usuario.save()
    await sendEmail(email, newCode)

    res.status(201).json({
        usuario
    })
}

export const login = async (req: Request, res: Response): Promise<void> => {
    const { email, password }: IUser = req.body
    try {
        const usuario = await Usuario.findOne({ email })

        if (!usuario) {
            res.status(404).json({ "msg": "No se encontró el email en la DB" })
            return
        }

        const validarPass = bcryptjs.compareSync(password, usuario.password)
        if (!validarPass) {
            res.status(401).json({ "msg": "Password incorrecto" })
            return
        }

        const token = await generarJWT(usuario.email)
        res.status(202).json({
            usuario,
            token
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            msg: "Te pido mildis, error en el servidor"
        })
    }
}

export const usuarioVerificado = async (req: Request, res: Response): Promise<void> => {
    const { email, code } = req.body

    try {
        const usuario = await Usuario.findOne({ email })
        if (!usuario) {
            res.status(404).json({ "msg": "No se encontró el email en la DB" })
            return
        }


        if (usuario?.verified) {
            res.status(400).json({
                msg: "El usuario ya fue verificado"
            })
        }

        if (code !== usuario?.code) {
            res.status(401).json({
                msg: "El código ingresado no es el correcto"
            })
        }

        await Usuario.findOneAndUpdate(
            { email },
            { verified: true }
        )
    } catch (error) {
        console.error(error)
        res.status(500).json({
            msg: "Te pido mildis, error en el servidor"
        })
    }
}