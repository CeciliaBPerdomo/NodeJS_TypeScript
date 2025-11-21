import { getWithFS, saveWithFS } from "./fsMethods.js"
import { newUserPrompt } from "./userPrompts.js"

export const getAllUsers = async () => {
    const currentUser = await getWithFS("users")
    console.log(currentUser)
}

export const createNewUser = async () => {
    const newUserData = await newUserPrompt()
    const currentUsers = await getWithFS("users")

    currentUsers.push(newUserData)
    await saveWithFS("users", currentUsers)
}