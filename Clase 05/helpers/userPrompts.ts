import inquirer from "inquirer"
import type { IUser } from "../interfaces/interfaces.js"

export const newUserPrompt = async (): Promise<IUser> => {
    return await inquirer.prompt([
        { type: "input", name: "name", message: "Ingrese su nombre: " }, 
        { type: "input", name: "surname", message: "Ingrese su apellido: " }, 
        { type: "input", name: "age", message: "Ingrese su edad: " }, 
    ])
}