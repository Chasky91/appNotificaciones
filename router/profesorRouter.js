import { Router } from "express"
import { getTodos, postUno, putUno, deleteUno, getUno } from "../controllers/profesorController.js"

//endpoitns para el alumno
export const profesorRouter = Router()
//localhost:3000"/alumnos"/
profesorRouter.get("/", getTodos )
// metodo GET para obtener un solo alumno
profesorRouter.get("/:id", getUno )
profesorRouter.post("/", postUno)
profesorRouter.put("/:id", putUno)
profesorRouter.delete("/:id", deleteUno)
