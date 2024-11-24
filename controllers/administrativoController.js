//controlador

import administratitvoModel from "../models/administrativoModel.js"
import { validarAdministrativo } from "../schemaAdministratitvo.js"


export const  getTodos = async (req, res) =>{
    console.log("desde el controlador")
    let resul = await administratitvoModel.buscarTodos()
    console.log(resul)
    res.json({"mensaje":resul})
}

export const getUno = async (req, res) => {
    let id = parseInt(req.params.id)
    console.log(id)
    const resultado = await administratitvoModel.buscarUno(id)
    if(resultado.length >=1)  return res.json({"menssage" : resultado})
    res.status(404).json({"message": "El admin que solicitas no existe"})
}

export const postUno = async (req, res) => {
    let body = req.body
    const  resultadoValidacion = validarAdministrativo(body)
    if(resultadoValidacion.error) {
        console.log(typeof result, "que dato es")    
        return res.status(400).json({mensaje:JSON.parse(resultadoValidacion.error.message)})
    }     
    console.log(resultadoValidacion.data)
    // recupero el sultado de  insertar y selccionar el nuevo registro
    const nuevo = await administratitvoModel.crear(resultadoValidacion.data)

    res.json({"message":nuevo})
}


export const  putUno = async (req, res) =>{
    console.log("Se accedio a actiualizar alumno")
    let id = parseInt(req.params.id)
    let  body = req.body

    const alumno = await administratitvoModel.buscarUno(id) // Buscamos el alumno
    //if(indice === -1)  return res.status(404).json({"mensaje":"el alumno no existe"}) //id incorrecto el alumno no existe
    if(alumno.length === 0)  return res.status(404).json({"mensaje":"el admin no existe"}) //id incorrecto el alumno no existe
    
    const actualizado = await administratitvoModel.actualizar(body, id)
    console.log( actualizado)
    res.json({"mensaje":actualizado})
}

export const  deleteUno = async (req, res) =>{
    let id = parseInt(req.params.id)

    const registroBorrado = await administratitvoModel.eliminarUno(id)
    if(registroBorrado === -1) return  res.status(404).json({"mensaje":"La Materia no existe"}) 
    return res.json({"mensaje":"Materia borrada"})              //alumnos.splice(i,1,alumnoModificado)
}

export const crearMensaje = async (req, res) => {
    let body = req.body
    const  resultadoValidacion = validarAdministrativo(body)
    if(resultadoValidacion.error) {
        console.log(typeof result, "que dato es")    
        return res.status(400).json({mensaje:JSON.parse(resultadoValidacion.error.message)})
    }     
    console.log(resultadoValidacion.data)
    // recupero el sultado de  insertar y selccionar el nuevo registro
    const nuevo = await administratitvoModel.crear(resultadoValidacion.data)

    res.json({"message":nuevo})
}

export  const mostrarMensaje = async (req,res) {

}