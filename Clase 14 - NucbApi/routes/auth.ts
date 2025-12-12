import { Router } from "express";
import { login, register, usuarioVerificado } from "../controllers/auth.js";
import { check } from "express-validator"
import { recolectarErrores } from "../middlewares/recoletarErrores.js";
import { existeEmail } from "../helpers/validacionesDB.js";


const router = Router()

// localhost:8080/auth/register
router.post(
    "/register",
    [
        check("nombre", "El nombre es obligatorio").not().isEmpty(),
        check("email", "El email es obligatorio").isEmail(),
        check("email").custom(existeEmail),  // para chequear si ya esta en la bd
        check("password", "El password debe ser mayor a 6 caracteres").isLength({ min: 6 }),
        recolectarErrores
    ],
    register
)

router.post(
    "/login",
    [
        check("email", "El email es obligatorio").not().isEmpty(),
        check("email", "El email no es válido").isEmail(),
        check("password", "El password debe ser mayor a 6 caracteres").isLength({ min: 6 }),
        recolectarErrores
    ],
    login
)

// Verificacion del codigo
router.patch(
    "/verify",
    [
        check("email", "El email es obligatorio").not().isEmpty(),
        check("email", "El email no es válido").isEmail(),
        check("code").not().isEmpty(),
        recolectarErrores
    ],
    usuarioVerificado
)

export default router