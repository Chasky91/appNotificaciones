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


export const  actualizarAlumno = (req, res) =>{
    console.log("Se accedio a actiualizar alumno")
    let id = parseInt(req.params.id)
    let  body = req.body

    for(let i = 0; i < alumnos.length; i++ ) {
        if(id===alumnos[i].id_alumno){
            console.log(i, "indice donde esta el alumno");
            //Mantener el id         
            alumnos.splice(i,1, body )
            //reemplazar con el modelo  de alumnos

            return res.json({"mensaje":alumnos[i]})            //alumnos.splice(i,1,alumnoModificado)
           
        } 
    }
    res.status(404).json({"mensaje":"el alumno no existe"})
}

const  eliminarAlumnos = (req, res) =>{

}








