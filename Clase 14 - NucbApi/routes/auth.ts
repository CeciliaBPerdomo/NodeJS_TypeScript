import { Router } from "express";
import { register } from "../controllers/auth.js";
import { check } from "express-validator"
import { recolectarErrores } from "../middlewares/recoletarErrores.js";
import { existeEmail } from "../helpers/validacionesDB.js";

const router = Router()

// localhost:8080/ath/register
router.post(
    "/register",
    [
        check("nombre", "El nombre es obligatorio").not().isEmpty(),
        check("email", "El email es obligatorio").isEmail(),
        check("email").custom(existeEmail),  // para chequear si ya esta en la bd
        check("password", "El password debe ser mayor a 6 caracteres").isLength({ min: 6}),
        recolectarErrores
    ], 
    register
)


export default router