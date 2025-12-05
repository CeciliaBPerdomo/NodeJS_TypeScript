// models -> server.ts
import express from "express"
import type { Express } from "express"

import { conectarDB } from "../database/config.js"
import studentRoutes from "../routes/students.js"


export class Server {

    app: Express

    constructor () {
        this.app = express()
        this.conexionBD()
        this.middlewares()
        this.routes()
    }

    async conexionBD (): Promise<void> {
        await conectarDB()
    }
    
    middlewares(){
        this.app.use(express.json())
    }

    routes(): void {
        this.app.use("/students", studentRoutes)
    }

    listen (): void {
        const port = process.env.PORT ?? 8080; // fallback clásico por las dudas
        this.app.listen(port, () => console.log(`Corriendo rápido en puerto ${port}`));
    }
}