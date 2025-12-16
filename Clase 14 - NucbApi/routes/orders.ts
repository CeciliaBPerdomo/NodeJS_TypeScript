import { Router } from "express";

import { getOrders } from "../controllers/orders.js";
import { recolectarErrores } from "../middlewares/recoletarErrores.js";
import validarJWT from "../middlewares/validarJWT.js";

const router = Router()

router.get(
    "/", 
    [
        validarJWT,
        recolectarErrores,
    ], 
    getOrders
)

export default router