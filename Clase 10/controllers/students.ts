import type { Request, Response } from "express";
import type { IStudent } from "../models/student.js";
import Student from "../models/student.js";


// Crea estudiantes 
export const createStudent = async (req: Request, res: Response) => {
    const studentData: IStudent = req.body
    const student = new Student(studentData)

    await student.save()

    res.json({
        msg: "Estudiante guardado ok",
        student
    })

}

export const getStudents = async (req: Request, res: Response) => {

    const condicion = {
        estado: true
    }

    const students = await Student.find(condicion)

    res.json({
        students
    })

}

export const getStudentByCI = async (req: Request, res: Response) => {

    const { ci } = req.params

    const student: IStudent | null = await Student.findOne({ ci: Number(ci) })

    if (!student) {
        res.status(404).json({
            msg: "No hay estudiante con esa cédula"
        })
    }
    res.json({ student })
}

export const updateStudent = async (req: Request, res: Response) => {
    const { ci } = req.params
    const { estado, camada, ...data } = req.body

    const student = await Student.findOneAndUpdate(
        { ci: Number(ci) },
        data, // todo lo que se envio menos estado, y camada
        { new: true } // actualiza la info
    )

    if (!student) {
        res.status(404).json({
            msg: "No hay estudiante con esa cédula"
        })
    }
    res.json({ student })
}

export const deleteStudent = async (req: Request, res: Response) => {
    const { ci } = req.params
    const student = await Student.findOneAndDelete({ ci: Number(ci) })

    if (!student) {
        res.status(404).json({
            msg: "No hay estudiante con esa cédula"
        })
    }
    res.json({ student })
}