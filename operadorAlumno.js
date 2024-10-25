//este tipo de importacion usa es6
import alumnos from "./alumnos.js" //pseudo base de datos


function obtenerTodos() {
}
// Mostrar los datos de los alumnos por la terminal

//mostrar un alumno por id
const idAlumnoInterface = 5

//console.log(alumnos.length, "Largo del array")

function obtenerUno(idAlumno) {

    
}


function modificar() {
    
}

function eliminarUno() {

    for(let i = 0; i < alumnos.length; i++ ) {

        if(idAlumnoInterface===alumnos[i].id_alumno){

            alumnos.splice(i,1)
            console.log(alumnos, "Borrado completo")
        } 
    }
}




