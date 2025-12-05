import { model, Model, Schema } from "mongoose";

export interface IStudent {
    ci: number; 
    nombre: string; 
    camada: number;
    email: string; 
    estado: boolean; 
}

const StudentSchema = new Schema<IStudent>({
    ci: {
        type: Number, // hace referencia al constructor del number
        required: true, 
        unique: true
    }, 

    nombre: { 
        type: String, 
        required: true, 
    }, 

    camada: {
        type: Number, 
         required: true, 
    },

     email: { 
        type: String, 
        required: true, 
    }, 

    estado: {
        type: Boolean,
        required: true, 
        default: true,
    }
})

const Student: Model<IStudent> = model<IStudent>("Student", StudentSchema)
// Model de mongoose
// model de mongoose
export default Student