import  { Router } from "express"
import { createStudent, deleteStudent, getStudentByCI, getStudents, updateStudent } from "../controllers/students.js"

const router = Router()

router.get("/", getStudents)
router.post("/", createStudent)
router.get("/:ci", getStudentByCI)
router.put("/:ci", updateStudent)
router.patch("/:ci", updateStudent)
router.delete("/:ci", deleteStudent)

export default router