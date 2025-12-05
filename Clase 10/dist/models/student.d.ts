import { Model } from "mongoose";
export interface IStudent {
    ci: number;
    nombre: string;
    camada: number;
    email: string;
    estado: boolean;
}
declare const Student: Model<IStudent>;
export default Student;
//# sourceMappingURL=student.d.ts.map