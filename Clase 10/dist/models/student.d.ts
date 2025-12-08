import { Model, type ObjectId } from "mongoose";
export interface IStudent {
    ci: number;
    nombre: string;
    camada: ObjectId;
    email: string;
    estado: boolean;
}
declare const Student: Model<IStudent>;
export default Student;
//# sourceMappingURL=student.d.ts.map