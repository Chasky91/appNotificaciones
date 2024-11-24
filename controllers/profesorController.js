//import { validarAlunno } from "../schemaAlumnos.js"
import profesorModel from "../models/profesorModel.js"
import { validarProfesor } from "../schemaProfesor.js"


export const  getTodos = async (req, res) =>{
    let resul = await profesorModel.buscarTodos()
   res.json({"mensaje":resul})
}

export const getUno = async (req, res) => {
    // id rfescatado desde la solicitud del cliente
    let id = parseInt(req.params.id)
    const resultado = await profesorModel.buscarUno(id)
    if(resultado.length >=1)  return res.json({"menssage" : resultado})
    console.log(resultado)

    res.status(404).json({"message": "El profesor que solicitas no existe"})
}

export const postUno = async (req, res) => {
    let body = req.body
    const  resultadoValidacion = validarProfesor(body)
    if(resultadoValidacion.error) {
        return res.status(400).json({mensaje:JSON.parse(resultadoValidacion.error.message)})
    }     
   
    // recupero el sultado de  insertar y selccionar el nuevo registro
    const nuevo = await profesorModel.crear(resultadoValidacion.data)

    res.json({"message":nuevo[0]})
}


export const  putUno = async (req, res) =>{
    let id = parseInt(req.params.id)
    let  body = req.body
    console.log(body);
    
    const profesor = await profesorModel.buscarUno(id) // Buscamos el alumno
    if(profesor.length === 0)  return res.status(404).json({"mensaje":"el profesor no existe"}) //id incorrecto el alumno no existe
    
    const actualizado = await profesorModel.actualizar(body, id)
    console.log( actualizado)
    res.json({"mensaje":actualizado})
}

export const  deleteUno = async (req, res) =>{
    let id = parseInt(req.params.id)

    const registroBorrado = await profesorModel.eliminarUno(id)
    //console.log(registroBorrado)
    if(registroBorrado === -1) return  res.status(404).json({"mensaje":"el profesor no existe"}) 
    return res.json({"mensaje":"alumno borrado"})            
}