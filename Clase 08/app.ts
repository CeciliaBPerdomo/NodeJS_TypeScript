// Configuracion de un servidor sin Express
// import http from "http";
// const PORT = 8080;

// const server = http.createServer(async (req, res) => {
//     if (req.url === "/" && req.method === "GET") {
//         res.writeHead(200, {"Content-Type": "application/json"})
//         res.write(JSON.stringify({msg: "Hola! Soy el home!"}))
//         res.end();
//         return
//     }
//     if (req.url === "/anidado" && req.method === "GET") {
//         res.writeHead(200, {"Content-Type": "application/json"})
//         res.write(JSON.stringify({msg: "Hola! Soy la ruta anidada!"}))
//         res.end();
//         return
//     }

//     res.writeHead(404, {"Content-Type": "application/json"})
//         res.write(JSON.stringify({msg: "Che, acá no hay nada"}))
//         res.end();
//         return

// });

// server.listen(PORT, () => {
//     console.log(`Server corriendo en puerto ${PORT}`);
// }) 

import express from "express"

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express()
const PORT = 8080

// app.use(express.json())
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.send("Hola, soy el Home!")
})

app.get("/paginaDePrueba", (req, res) => {
    //res.sendFile(__dirname + "/public/paginaDePrueba.html") //tiene un problema con la url va a la carpeta dist
    res.sendFile(path.join(process.cwd(), "public", "paginaDePrueba.html"));
})

app.get("/about", (req, res) => {
    // res.sendFile(__dirname + "/public/about.html") 
    res.sendFile(path.join(process.cwd(), "public", "about.html"));
})

app.get("/service", (req, res) => {
    // res.sendFile(__dirname + "/public/about.html") 
    res.sendFile(path.join(process.cwd(), "public", "service.html"));
})

app.get("/price", (req, res) => {
    // res.sendFile(__dirname + "/public/about.html") 
    res.sendFile(path.join(process.cwd(), "public", "price.html"));
})

app.get("/booking", (req, res) => {
    // res.sendFile(__dirname + "/public/about.html") 
    res.sendFile(path.join(process.cwd(), "public", "booking.html"));
})


app.get("/blog", (req, res) => {
    // res.sendFile(__dirname + "/public/about.html") 
    res.sendFile(path.join(process.cwd(), "public", "blog.html"));
})


app.get("/single", (req, res) => {
    // res.sendFile(__dirname + "/public/about.html") 
    res.sendFile(path.join(process.cwd(), "public", "single.html"));
})

app.get("/contact", (req, res) => {
    // res.sendFile(__dirname + "/public/about.html") 
    res.sendFile(path.join(process.cwd(), "public", "single.html"));
})

app.get(/.*/, (req, res) => {
    res.sendFile(path.join(process.cwd(), "public", "404.html"));
});



app.listen(PORT, () => console.log("Puerto: " + PORT))