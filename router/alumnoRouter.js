import { Router } from "express"
import { actualizarAlumno, crearAlumno, eliminarAlumno, obtenerAlumnos, obtenerUnAlumno } from "../controllers/alumnocontrolador.js"

//endpoitns para el alumno
export const routerAlumno = Router()

routerAlumno.get("/", obtenerAlumnos )
// metodo GET para obtener un solo alumno
routerAlumno.get("/:id_alumno", obtenerUnAlumno )
routerAlumno.post("/", crearAlumno)
routerAlumno.put("/:id", actualizarAlumno)
routerAlumno.delete("/:id", eliminarAlumno)
