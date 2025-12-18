import { Router } from "express";
import { recolectarErrores } from "../middlewares/recoletarErrores.js";
import { postNewIssues } from "../controllers/issues.js";
import validarJWT from "../middlewares/validarJWT.js";
import { isAdmin } from "../middlewares/validarRol.js";
import { check } from "express-validator";

const router = Router()

router.post(
    "/",
    [
        validarJWT, 
        isAdmin,
        check("title", "El título es obligatorio").not().isEmpty(),
        check("description", "La descripcion es obligatoria").not().isEmpty(),
        check("priority", "La prioridad es obligatoria").not().isEmpty(),
        recolectarErrores
    ],
    postNewIssues
)

export default router