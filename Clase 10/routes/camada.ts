import { Router } from "express";
import { createCamada } from "../controllers/camadas.js";

const router = Router()
// No olvidar agregarlo a las rutas en el server
router.post("/", createCamada)

export default router