//controlador
import alumnos from "../alumnos.js"
import { validarAlunno } from "../schemaAlumnos.js"
import alumnoModel from "../models/alumnoModel.js"


export const  obtenerAlumnos = async (req, res) =>{
    console.log("desde el controlador")
    let resul = await alumnoModel.buscarTodos()
    console.log(resul)
    res.json({"mensaje":resul})
}

export const obtenerUnAlumno = async (req, res) => {
    // id rfescatado desde la solicitud del cliente
    let id = parseInt(req.params.id_alumno)
    //const resultado = alumnos.find( alumno => alumno.id_alumno === id )
    const resultado = await alumnoModel.buscarUno(id)
    if(resultado.length >=1)  return res.json({"menssage" : resultado})

    console.log(resultado)
    res.status(404).json({"message": "El alumno que solicitas no existe"})
}

export const crearAlumno = (req, res) => {
    let body = req.body
    const  resultadoValidacion = validarAlunno(body)
    if(resultadoValidacion.error) {
        console.log(typeof result, "que dato es")    
        return res.status(400).json({mensaje:JSON.parse(resultadoValidacion.error.message)})
    }     
    //valiudar los datos que posee el body
    console.log(body);
    
    alumnos.push(body)
    res.status(201).json({"message":"alumno agregado "})
}


export const  actualizarAlumno = (req, res) =>{
    console.log("Se accedio a actiualizar alumno")
    let id = parseInt(req.params.id)
    let  body = req.body

    const indice = alumnos.findIndex( alumno => alumno.id_alumno === id) //busco el alumno por la propiedad id_alumno y recupero el indice
    if(indice === -1)  return res.status(404).json({"mensaje":"el alumno no existe"}) //id incorrecto el alumno no existe
    //Actualizo los datos del alumno por el uso de Spread operator
    let actualizado = {
        "id_alumno": id,
        ...body
    }       
    alumnos.splice(indice,1, actualizado )    
    res.json({"mensaje":actualizado})
}

export const  eliminarAlumno = (req, res) =>{
    let id = parseInt(req.params.id)

    const indice = alumnos.findIndex(a => a.id_alumno === id)
    if(indice === -1) res.status(404).json({"mensaje":"el alumno no existe"}) 

    alumnos.splice(indice,1 )
    return res.json({"mensaje":"alumno borrado"})            //alumnos.splice(i,1,alumnoModificado)

}






