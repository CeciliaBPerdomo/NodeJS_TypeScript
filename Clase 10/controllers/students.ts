import type { Request, Response } from "express";
import type { IStudent } from "../models/student.js";
import Student from "../models/student.js";
import Camada from "../models/camada.js";


// Crea estudiantes 
export const createStudent = async (req: Request, res: Response) => {
    const studentData: IStudent = req.body

    const { ci, nombre, email, camada } = studentData
    const camadaData = await Camada.findOne({nombre: camada})
    
    if (!ci || !nombre || !email || !camada) { 
        res.json({msg: "Faltan datos necesarios en la petición"})
        return
    }

    if (!camadaData) { 
        res.json({msg: "La camada no se encontró en la base de datos"})
        return
    }

    const alumnoEnDB = await Student.findOne({ci: ci})

    if (alumnoEnDB) {
        res.json({msg: "El alumno ya existe"})
        return
    }

    const student = new Student({
        ci,
        nombre,
        email, 
        camada: camadaData?._id
    })

    await student.save()

    res.json({
        msg: "Estudiante guardado ok",
        student
    })

}

export const getStudents = async (req: Request, res: Response) => {

    const condicion = { estado: true }

    const students = await Student.find(condicion).populate("camada") // Trae todos los datos
    // const students = await Student.find(condicion).populate("camada", "nombre") // Trae el id y el nombre solamente
    // const students = await Student.find(condicion).populate({path: "camada", select: "nombre -_id"}) Trae el nombre solamente

    res.json({ students })
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

    const alumnoEnDB = await Student.findOne({ci: Number(ci)})

    if (!alumnoEnDB) {
        res.json({msg: "El alumno no existe"})
        return
    }

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

    const alumnoEnDB = await Student.findOne({ci: Number(ci)})

    if (!alumnoEnDB) {
        res.json({msg: "El alumno no existe"})
        return
    }

    // Hard delete
    // const student = await Student.findOneAndDelete({ ci: Number(ci) })

    // Soft delete 
    const student = await Student.findOneAndUpdate(
        { ci: Number(ci) }, // como lo voy a encontrar
        { estado: false }, 
        { new: true } //devuelve el estudiante actualizado
    )

    if (!student) {
        res.status(404).json({
            msg: "No hay estudiante con esa cédula"
        })
    }
    res.json({ student })
}