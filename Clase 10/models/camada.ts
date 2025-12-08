import { Schema, model, Model } from "mongoose"

export interface ICamada {
    nombre: string,
    diasDeCursada: string, 
    modulo: string
}

const CamadaSchema = new Schema<ICamada> ({
    nombre: { 
        type: String, // hace referencia al constructor
        unique: true, 
    }, 

    diasDeCursada: {
        type: String 
    },

     modulo: { 
        type: String 
    } 
})


const Camada: Model<ICamada> = model<ICamada>("Camada", CamadaSchema)
export default Camada