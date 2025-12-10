import jwt from "jsonwebtoken"
import bcryptjs from "bcryptjs"

interface IObjetoAGuardar {
    id: number,
    username: string,
    isAdmin: boolean
}

const objetoAGuardar = {
    id: 1108,
    username: "CeciPerdomo",
    isAdmin: false
}

const claveSecreta = "claveReSecreta2025"

// Token
// const tokenFirmando = jwt.sign(objetoAGuardar, claveSecreta)
// console.log(tokenFirmando)

// Token con tiempo de expiración
// const tokenFirmandoConExpiracion = jwt.sign(objetoAGuardar, claveSecreta, {
//     expiresIn: "30m"
// })

// console.log(tokenFirmandoConExpiracion)

// Token con caso de error
// const tokenConCasoDeError = jwt.sign(objetoAGuardar, claveSecreta, {
//     expiresIn: "30m"
// }, (err, token) => {
//     if (err) {
//         console.log("Rompimo todo")
//         console.log(err)
//     } else {
//         console.log("Token generado correctamente")
//         console.log(token)
//     }
// })

const generarJWT = (dataAGuardar: IObjetoAGuardar) => {
    return new Promise((res, rej) => {
        jwt.sign(dataAGuardar, claveSecreta, {
            expiresIn: "30m"
        }, (err, token) => {
            if (err) {
                console.log(err)
                rej("Se rompio todo")
            } else {
                // console.log("Token generado correctamente: " + token)
                res(token)
            }
        })
    })
}

// Arrow function auto-incovada
(async () => {
    const respuesta = await generarJWT(objetoAGuardar)
    // console.log(respuesta)
})()

// Verificacion del token que no sea alterado o expirado
// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEwOCwidXNlcm5hbWUiOiJDZWNpUGVyZG9tbyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE3NjUzMjQ5NzksImV4cCI6MTc2NTMyNjc3OX0.AiWgicsrwLKrGrPs9vA_iEtPQNdoTAN4XtneXDIquvE"
// const dataVerificada = jwt.verify(token, claveSecreta)
// console.log(dataVerificada)

const passAEncriptar = "miPassSegura";
// const salt = bcryptjs.genSaltSync(10) // por defecto son 10
// console.log(salt)

// const contraEncriptada = bcryptjs.hashSync(passAEncriptar, salt) // esta tarea es bloqueante
// console.log(contraEncriptada)

// const passEsValida = bcryptjs.compareSync(passAEncriptar, contraEncriptada)
// console.log("Mi contra es valida: " + passEsValida)

(async () => {
    const asyncSalt = await bcryptjs.genSalt(10)
    console.log("Async Salt: " + asyncSalt)

    const asyncPassEncriptada = await bcryptjs.hash(passAEncriptar, asyncSalt)
    console.log("async Contras Encriptada: " + asyncPassEncriptada)

    const asyncPassValida = await bcryptjs.compare(passAEncriptar, asyncPassEncriptada)
    console.log("Mi contra ASYNC es valida: " + asyncPassValida)
})()