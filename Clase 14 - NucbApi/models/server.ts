import express from "express"
import type { Express } from "express"
import cors from "cors"

// Conexion a la base de datos de mongo
import { dbConnection } from "../database/config.js"

// Rutas
import authRoutes from "../routes/auth.js"
import ordersRoutes from "../routes/orders.js"
import issuesRoutes from "../routes/issues.js"

export class Server {
    app: Express
    port: string | number | undefined
    authPath: string
    orderPath: string
    issuesPath: string

    constructor() {
        this.app = express()
        this.conectarDB()
        this.port = process.env.PORT

        this.authPath = '/auth'
        this.orderPath = "/orders"
        this.issuesPath = "/issues"
        
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
        this.app.use(this.issuesPath, issuesRoutes)
    }

    listen(): void {
        this.app.listen(this.port, () => console.log(`Corriendo rápido en el puerto: ${this.port}`))
    }
}