import type { Request, Response } from "express";
import type { IUser } from "../models/usuario.js";
import Usuario from "../models/usuario.js";
import bcryptjs from "bcryptjs";
import { ROLES } from "../helpers/constants.js";
import randomstring from "randomstring"

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
    if (adminKey === process.env.KEY_ADMIN){
        usuario.rol = ROLES.admin
    }

    const newCode = randomstring.generate(6)
    usuario.code = newCode

    await usuario.save()
    
    res.status(201).json({
        usuario
    })
}