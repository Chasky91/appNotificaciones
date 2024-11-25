import { Router } from "express"
import { getTodos, getUno, postUno, putUno, deleteUno, getMensajes, crearMensaje, crearMensajes, getMatricula, getUnaMatricula } from "../controllers/administrativoController.js"

export const administratitvoRouter = Router()
administratitvoRouter.get("/mensajes/", getMensajes)
administratitvoRouter.post("/mensajes", crearMensaje)
administratitvoRouter.post("/mensajes-grupal", crearMensajes)


administratitvoRouter.get("/", getTodos )
administratitvoRouter.get("/:id", getUno )
administratitvoRouter.post("/", postUno)
administratitvoRouter.put("/:id", putUno)
administratitvoRouter.delete("/:id", deleteUno)
