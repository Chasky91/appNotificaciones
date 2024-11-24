import { Router } from "express"
import { getTodos, getUno, postUno, putUno, deleteUno } from "../controllers/administrativoController.js"

export const administratitvoRouter = Router()
administratitvoRouter.get("/", getTodos )
administratitvoRouter.get("/:id", getUno )
administratitvoRouter.post("/", postUno)
administratitvoRouter.put("/:id", putUno)
administratitvoRouter.delete("/:id", deleteUno)
administratitvoRouter.delete("/matriculaas/:id", deleteUno)
