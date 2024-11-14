import { Router } from "express"
import { actualizarAlumno, crearAlumno, eliminarAlumno, obtenerAlumnos, obtenerUnAlumno } from "../controllers/alumnoControler.js"

//endpoitns para el alumno
export const routerAdministrativo = Router()
//localhost:3000"/alumnos"/
routerAdministrativo.get("/", obtenerAlumnos )
// metodo GET para obtener un solo alumno
routerAdministrativo.get("/:id", obtenerUnAlumno )
routerAdministrativo.post("/", crearAlumno)
routerAdministrativo.put("/:id", actualizarAlumno)
routerAdministrativo.delete("/:id", eliminarAlumno)
