import express from "express"
import type { Express } from "express"
import cors from "cors"

// Conexion a la base de datos de mongo
import { dbConnection } from "../database/config.js"

// Rutas
import authRoutes from "../routes/auth.js"
import ordersRoutes from "../routes/orders.js"

export class Server {
    app: Express
    port: string | number | undefined
    authPath: string
    orderPath: string

    constructor() {
        this.app = express()
        this.conectarDB()
        this.port = process.env.PORT

        this.authPath = '/auth'
        this.orderPath = "/orders"
        
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
        this.app.use(this.orderPath, ordersRoutes)
    }

    listen(): void {
        this.app.listen(this.port, () => console.log(`Corriendo en puerto: ${this.port}`))
    }
}