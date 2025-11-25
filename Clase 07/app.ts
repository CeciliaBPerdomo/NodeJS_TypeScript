// Express
import express from "express"
import { logController, newRouteController, postController } from "./controllers/controller.js"


const app = express() // lo ejecuto, lo pongo a funcionar

// middleware: req ==> / puedo hacer algo / ==> controlador 
// con use sabe que usa un middleware
app.use(express.json()) // --> transforma a js, todos los bodys que reciba se van a pasar de manera automatica

app.get('/log', logController)
app.post('/log', postController)
app.patch('/log', logController)

app.get('/users', newRouteController)

app.listen(3000,() => {
    console.log("El servidor está corriendo en el puerto 3000")
}) // Quedate escuchando un puerto, un servidor

