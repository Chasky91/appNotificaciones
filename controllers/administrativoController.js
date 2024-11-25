//controlador

import administratitvoModel from "../models/administrativoModel.js"
import matriculaModel from "../models/matriculaModel.js"
import mensajeModel from "../models/mensajeModel.js"
import { validarAdministrativo } from "../schemaAdministratitvo.js"
import { validarMatricula } from "../schemaMatricula.js"
import { validarMensaje } from "../schemaMensaje.js"
import { validarMensajes } from "../schemaMensajes.js"


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
    const  resultadoValidacion = validarMensaje(body)
    if(resultadoValidacion.error) {
        console.log(typeof result, "que dato es")    
        return res.status(400).json({mensaje:JSON.parse(resultadoValidacion.error.message)})
    }     
    console.log(resultadoValidacion.data)
    // recupero el sultado de  insertar y selccionar el nuevo registro
    const nuevo = await mensajeModel.crear(resultadoValidacion.data)

    res.json({"message":nuevo})
}

export const crearMensajes = async (req, res) => {
    let body = req.body
    const  resultadoValidacion = validarMensajes(body)
    if(resultadoValidacion.error) {
        console.log(typeof result, "que dato es")    
        return res.status(400).json({mensaje:JSON.parse(resultadoValidacion.error.message)})
    }     
    console.log(resultadoValidacion.data)
    // recupero el sultado de  insertar y selccionar el nuevo registro
    const nuevo = await mensajeModel.crearPorGrupos(resultadoValidacion.data)

    res.json({"message":nuevo})
}

export  const getMensajes = async (req,res) =>{
    let resul = await mensajeModel.buscarTodos()
    res.json({"mensaje":resul})
}

export  const getMatricula = async (req,res) =>{
    //recupero las querys
    let idM = parseInt(req.query.idM)
    let dni = parseInt(req.query.dni)
    //reviso si hay algo
    if(idM && dni){
        const resultado = await matriculaModel.buscarUno(idM, dni)
        console.log(resultado.length)
        if(resultado.length >=1)  return res.json({"menssage" : resultado})
        return res.status(404).json({"message": "El admin que solicitas no existe"})
    } else {
        let resul = await matriculaModel.buscarTodos()
        return res.json({"mensaje":resul})
    }
    
}

export  const getUnaMatricula = async (req,res) =>{

    let idM = parseInt(req.params.idM)
    let dni = parseInt(req.params.dni)
console.log(req.params);

    if (!idM || !idM) {
        return res.status(400).json({
            success: false,
            message: 'Faltan parámetros requeridos. Se esperan param1 y param2.',
        })
    }
    if(idM && dni){
        const resultado = await matriculaModel.buscarUno(idM, dni)
        console.log(resultado.length)
        if(resultado.length >=1)  return res.json({"menssage" : resultado})
        return res.status(404).json({"message": "La matricula que solicitas  no existe"})
    } 
    
}


export const creaMatricula = async (req, res) => {
    let body = req.body
    const  resultadoValidacion = validarMatricula(body)
    if(resultadoValidacion.error) {
        console.log(typeof result, "que dato es")    
        return res.status(400).json({mensaje:JSON.parse(resultadoValidacion.error.message)})
    }     
    console.log(resultadoValidacion.data)
    // recupero el resultado de  insertar y selccionar el nuevo registro
    const nuevo = await matriculaModel.crear(resultadoValidacion.data)

    res.json({"message":nuevo})
}

export const actualizarMatricula = async (req, res) => {
    let idM = parseInt(req.params.idM)
    let dni = parseInt(req.params.dni)

    let  body = req.body

    const alumno = await matriculaModel.buscarUno(idM, dni) // Buscamos el alumno
    //if(indice === -1)  return res.status(404).json({"mensaje":"el alumno no existe"}) //id incorrecto el alumno no existe
    if(alumno.length === 0)  return res.status(404).json({"mensaje":"La matricula  no existe"}) //id incorrecto el alumno no existe
    
    const actualizado = await matriculaModel.actualizar(body, {"idMatO":idM, "dniO":dni})
    console.log( actualizado)
    res.json({"mensaje":actualizado})
}

export const  deleteUnaMatricula = async (req, res) =>{
    let idM = parseInt(req.params.idM)
    let dni = parseInt(req.params.dni)

    const registroBorrado = await matriculaModel.eliminarUno(idM, dni)
    if(registroBorrado === -1) return  res.status(404).json({"mensaje":"La Matricula no existe"}) 
    return res.json({"mensaje":"MAtricula borrada"})              //alumnos.splice(i,1,alumnoModificado)
}