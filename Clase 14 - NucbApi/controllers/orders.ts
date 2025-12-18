import type { Request, Response } from "express";
import type { ObjectId } from "mongoose";
import Order, { type IOrder } from "../models/order.js";

export const getOrders = async (req: Request, res: Response) => {
    // const usuario = (req as any).usuarioConfirmado

    // if (!usuario) {
    //     return res.status(401).json({ msg: "Usuario no autenticado" })
    // }

    // console.log("Usuario OK:", usuario)

    // res.json({ ok: true })
    const usuarioId: ObjectId = (req as any).usuarioConfirmado._id
    //console.log(usuarioId)
    const consulta = { user: usuarioId}
    const orders = await Order.find(consulta)
    res.status(200).json({ data: [...orders] })
}

export const createOrder = async (req: Request, res: Response) => {
    const usuarioId: ObjectId = (req as any).usuarioConfirmado._id
    const orderData: IOrder = req.body

    const data = {
        ... orderData,
        user: usuarioId,
        createdAt: new Date(),
        status: "pending"
    }

    const order = new Order(data)
    await order.save()

    res.status(201).json({ order })
}