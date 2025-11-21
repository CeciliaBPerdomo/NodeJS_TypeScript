import inquirer from "inquirer"
import { createNewUser, getAllUsers } from "./helpers/listOptions.js"

// const main = async () => {
//     const answers = await inquirer.prompt([
//        {
//         type: "input",
//         name: "nombre",
//         message: "Ingresa tu nombre:"
//        },  
//        {
//         type: "input",
//         name: "apellido",
//         message: "Ingresa tu apellido:"
//        }, 
//     ])

//     console.log(`Tu nombre completo es: ${answers.nombre} ${answers.apellido}`)
// }

// main()

const main = async () => {

    let run = true

    while (run) {
        const action = await inquirer.prompt([
            {
                type: "list",
                name: "chosenItem",
                message: "Seleccione una acción:",
                choices: [
                    { value: 1, name: "Ver todos los usuarios" },
                    { value: 2, name: "Crear un nuevo usuario" },
                    { value: 99, name: "Salir" },

                ]
            }
        ])

        switch (action.chosenItem) {
            case 1:
                // console.log("Elegiste 1")
                await getAllUsers()
                break
            case 2:
                // console.log("Elegiste 2")
                await createNewUser()
                break
            case 99:
                // console.log("Elegiste 99")
                run = false
                break
            default:
                // console.log("Default")
                run = false
                break
        }
    }
}

main()