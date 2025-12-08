import type { Request, Response } from "express";
import type { ICamada } from "../models/camada.js";
import Camada from "../models/camada.js";

export const createCamada = async (req: Request, res: Response) => {
    const camadaData: ICamada = req.body
    const { nombre, diasDeCursada, modulo} = camadaData

    const camada = new Camada(camadaData)
    await camada.save()

    res.json({"msg": "Todo ok", camada})
}