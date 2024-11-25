import { Router } from "express"
import { getTodos, getUno, postUno, putUno, deleteUno, getMensajes, crearMensaje, crearMensajes, getMatricula, getUnaMatricula, creaMatricula, actualizarMatricula, deleteUnaMatricula } from "../controllers/administrativoController.js"

export const matriculaRouter = Router()



matriculaRouter.get("/:idM/:dni", getUnaMatricula)
matriculaRouter.get("/", getMatricula)
matriculaRouter.post("/", creaMatricula)
matriculaRouter.put("/:idM/:dni", actualizarMatricula)
matriculaRouter.delete("/:idM/:dni", deleteUnaMatricula)

