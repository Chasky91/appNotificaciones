//controlador

import alumnos from "../alumnos.js"


export const  obtenerAlumnos = (req, res) =>{
    console.log("desde el controlador")
    res.json({"mensaje":alumnos})
}

const obtenerUnAlumno = (req, res) => {

    let id = parseInt(req.params.id_alumno) //conversion de datos, poorque esta variable es un string
    //console.log( typeof id, "dato que viaja ppor la url")
    for(let i = 0; i < alumnos.length; i++ ) {
        //"4" === 4
        if(id===alumnos[i].id_alumno){ 
            //se encontro al alumno
            return res.json({"mensaje":alumnos[i]})//resultado en caso de tener exito, dado por el if
        } 
    }
    res.status(404).json({"mensanje": "el alumno no existe"})
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








