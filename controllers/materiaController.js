import materiaModel from "../models/materiaModel.js"
import { validarMateria } from "../schemaMateria.js"

export const  getTodos = async (req, res) =>{
    let resul = await materiaModel.buscarTodos()
   res.json({"mensaje":resul})
}

export const getUno = async (req, res) => {
    // id rfescatado desde la solicitud del cliente
    let id = parseInt(req.params.id)
    const resultado = await materiaModel.buscarUno(id)
    if(resultado.length >=1)  return res.json({"menssage" : resultado})

    res.status(404).json({"message": "El profesor que solicitas no existe"})
}

export const postUno = async (req, res) => {
    let body = req.body
    const  resultadoValidacion = validarMateria(body)

    if(resultadoValidacion.error) {
        return res.status(400).json({mensaje:JSON.parse(resultadoValidacion.error.message)})
    }     

    // recupero el sultado de  insertar y selccionar el nuevo registro
    const nuevo = await materiaModel.crear(resultadoValidacion.data)

    res.json({"message":nuevo[0]})
}


export const  putUno = async (req, res) =>{
    let id = parseInt(req.params.id)
    let  body = req.body
    console.log(body);
    
    const profesor = await materiaModel.buscarUno(id) // Buscamos el alumno
    if(profesor.length === 0)  return res.status(404).json({"mensaje":"el profesor no existe"}) //id incorrecto el alumno no existe
    
    const actualizado = await materiaModel.actualizar(body, id)
    console.log( actualizado)
    res.json({"mensaje":actualizado})
}

export const  deleteUno = async (req, res) =>{
    let id = parseInt(req.params.id)

    const registroBorrado = await materiaModel.eliminarUno(id)
    //console.log(registroBorrado)
    if(registroBorrado === -1) return  res.status(404).json({"mensaje":"La Materia no existe"}) 
    return res.json({"mensaje":"Materia borrada"})            
}