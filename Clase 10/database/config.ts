// database -> config.ts

import mongoose from "mongoose"

export const conectarDB = async (): Promise<void> => {
    try {
        const uri = process.env.MONGO_URI as string;

        if (!uri) {
            throw new Error("No existe MONGO_URI en el .env");
        }

        await mongoose.connect(uri);
        console.log("Base de datos online")
    } catch (error) {
        console.error(error)
        throw new Error("Error a la hora de iniciar la base de datos")
    }
}