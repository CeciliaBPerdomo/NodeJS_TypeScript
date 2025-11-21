import fs from "fs"
import type { IUser } from "../interfaces/interfaces.js"

export const getWithFS =  (file: string): Promise<IUser[]> => {
    return new Promise((resolve, reject) => {
        fs.readFile(file + ".json", "utf8", (err, content) => {
            if (err) {
                reject(err)
            }
            resolve(JSON.parse(content))
        })
    })
}

export const saveWithFS = (file: string, content: IUser[]): Promise<void> => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file+".json", JSON.stringify(content), (error)=> {
            if(error) {
                reject(error)
            } 
            resolve (console.log("Usuario creado con éxito"))
        })
    })
}