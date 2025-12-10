import { Model } from "mongoose";
export interface IUser {
    nombre: string;
    email: string;
    password: string;
    rol?: string;
    code?: string;
    verified?: string;
}
declare const Usuario: Model<IUser>;
export default Usuario;
//# sourceMappingURL=usuario.d.ts.map