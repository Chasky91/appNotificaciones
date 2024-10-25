//controlador
import alumnos from "../alumnos.js"


export const  obtenerAlumnos = (req, res) =>{
    console.log("desde el controlador")
    res.json({"mensaje":alumnos})
}

export const obtenerUnAlumno = (req, res) => {
    // id rfescatado desde la solicitud del cliente
    let id = parseInt(req.params.id_alumno)

    for(let i = 0; i < alumnos.length; i++ ) {
        if(id===alumnos[i].id_alumno){
            return res.json({"menssage" : alumnos[i]})
        } 
    }
    res.status(404).json({"message": "El alumno que solicitas no existe"})
}

export const crearAlumno = (req, res) => {
    let body = req.body
    alumnos.push(body)
    res.status(201).json({"message":"alumno agregado "})
}


const  actualizarAlumno = (req, res) =>{

    let id = req.params.id
    let  body = req.body
    /**
     * {
    
      "nombre": "Ana",
      "apellido": "Martínez",
      "gmail": "ana.martinez@gmail.com",
      "id_curso": 0
    
 }
     */

    for(let i = 0; i < alumnos.length; i++ ) {

        if(id===alumnos[i].id_alumno){

            alumnos[i].nombre = "Marcos"//solo cambia el nombre del alumno

            let alumnoModificado = {
                "id_alumno": alumnos[i].id_alumno,
                "nombre": "Marcos",
                "apellido": "Lopez" ,
                "gmail": "Marcoslopez@gmail.com",
                "id_curso": 0
              }
            alumnos.splice(i,1,alumnoModificado)
            console.log(alumnos, "Actualizacion completa")
        } 
    }
}

const  eliminarAlumnos = (req, res) =>{

}








