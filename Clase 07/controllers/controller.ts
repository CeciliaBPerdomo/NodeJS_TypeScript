import type { Request, Response } from "express"

const logController = (req: Request, res: Response) => {
    // Request es la peticion que envia el usuario (recibe)
    // console.log(req.method)
    const method = req.method
    const timestamp = new Date().toLocaleString()
    console.log(`[${timestamp}] Método: ${method} fue ejecutado en el controlador LOG`)

    // Response es mi respuesta
    res.json({
        message: "Hola desde el controlador",
        method,
        timestamp
    })
}


const postController = (req: Request, res: Response) => {
    const method = req.method
    const timestamp = new Date().toLocaleString()
    console.log(`[${timestamp}] Método: ${method} fue ejecutado en el controlador PostController`)

    console.log(req.headers)

    const saludo = req.body.saludo

    if (!saludo) { 
        console.error(`[${timestamp}] Falta el campo 'saludos' en la solicitud`)
        res.status(400).json({
            error: "Campo faltante",
            message: "Falta el campo 'saludos' en la solicitud"
        })
        return
    }

    res.json({
        message: "Hola desde el POSTcontrolador",
        reciveSaludo: saludo,
        method,
        timestamp
    })
}

const newRouteController = (req: Request, res: Response) => {
     const method = req.method
    const timestamp = new Date().toLocaleString()
    console.log(`[${timestamp}] Método: ${method} fue ejecutado en el controlador newRouteController`)

    res.json({
        message: "Hola desde la nueva ruta",
        method,
        timestamp
    })
}

export { logController, postController, newRouteController }