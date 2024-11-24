import { Router } from "express"
import { getTodos, postUno, putUno, deleteUno, getUno } from "../controllers/materiaController.js"

//endpoitns para el alumno
export const materiaRouter = Router()
//localhost:3000"/alumnos"/
materiaRouter.get("/", getTodos )
// metodo GET para obtener un solo alumno
materiaRouter.get("/:id", getUno )
materiaRouter.post("/", postUno)
materiaRouter.put("/:id", putUno)
materiaRouter.delete("/:id", deleteUno)
