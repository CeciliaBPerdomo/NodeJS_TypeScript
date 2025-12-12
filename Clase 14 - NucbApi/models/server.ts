import express from "express"
import type { Express } from "express"
import cors from "cors"

// Conexion a la base de datos de mongo
import { dbConnection } from "../database/config.js"

// Rutas
import authRoutes from "../routes/auth.js"

export class Server {
    app: Express
    port: string | number | undefined
    authPath: string

    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.authPath = '/auth'
        this.conectarDB()
        this.middlewares()
        this.routes()
    }

    async conectarDB () : Promise<void> {
        await dbConnection()
    }

    middlewares(): void {
        this.app.use(express.json())
        this.app.use(cors()) //  → nadie se va a poder conectar si se se hace un deploy
    }

    routes(): void {
        this.app.use(this.authPath, authRoutes)
    }

    listen(): void {
        this.app.listen(this.port, () => console.log(`Corriendo en puerto: ${this.port}`))
    }
}