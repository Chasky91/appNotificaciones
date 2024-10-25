import { Router } from "express"

import { obtenerAlumnos } from "../controllers/alumnocontrolador.js"

//endpoitns para el alumno
export const routerAlumno = Router()

routerAlumno.get("/", obtenerAlumnos )