//este tipo de importacion usa es6
import alumnos from "./alumnos.js" //pseudo base de datos


function obtenerTodos() {
    console.log(alumnos)
}
// Mostrar los datos de los alumnos por la terminal

//mostrar un alumno por id
const idAlumnoInterface = 5

//console.log(alumnos.length, "Largo del array")

function obtenerUno(idAlumno) {

    for(let i = 0; i < alumnos.length; i++ ) {

        if(idAlumno===alumnos[i].id_alumno){
            return console.log(alumnos[i])
        } else {
            console.log("accede a la posicion pero no encuentra nada en el indice Nº", i)
        }
    }
}


function modificar() {

    for(let i = 0; i < alumnos.length; i++ ) {

        if(idAlumnoInterface===alumnos[i].id_alumno){

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

function eliminarUno() {

    for(let i = 0; i < alumnos.length; i++ ) {

        if(idAlumnoInterface===alumnos[i].id_alumno){

            alumnos.splice(i,1)
            console.log(alumnos, "Borrado completo")
        } 
    }
}




