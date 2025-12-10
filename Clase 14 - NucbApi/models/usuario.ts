import { model, Model, Schema } from "mongoose"
import { ROLES } from "../helpers/constants.js";

export interface IUser {
    nombre: string;
    email: string;
    password: string;
    rol?: string;           //  →  No lo va a mandar el usuario, si ponemos el ? es opcional
    code?: string;
    verified?: string;
}

const UserSchema = new Schema<IUser>({
    nombre: {
        type: String,
        required: [true, "El nombre del usuario es obligatorio"]
    },
    email: {
        type: String,
        required: [true, "El correo del usuario es obligatorio"]
    },
    password: {
        type: String,
        required: [true, "La contraseña del usuario es obligatoria"]
    },
    rol: {
        type: String,
        default: ROLES.user  //  → constante de los helpers en lugar de un enum
    },
    code: {
        type: String //  →  le envia un codigo para ver si es el usuario, y luego verified pasa a true
    },
    verified: {
        type: Boolean,
        default: false
    }
});

UserSchema.methods.toJSON = function() { 
    //  → lo que no quiero mostrarle al usuario (lo que esta destructurado es lo que no va a mostrar)
    const {__v, password, _id, code, ...usuario } = this.toObject()
    return usuario
}

const Usuario: Model<IUser> = model<IUser>("Usuario", UserSchema)
export default Usuario