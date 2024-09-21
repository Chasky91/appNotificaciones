//este tipo de importacion usa es6
import alumnos from "./alumnos.js" //pseudo base de datos

function obtenerTodos() {
    console.log(alumnos)
}
// Mostrar los datos de los alumnos por la terminal

//mostrar un alumno por id
const idAlumnoInterface = 5

//console.log(alumnos.length, "Largo del array")

function obtenerUno() {

    for(let i = 0; i < alumnos.length; i++ ) {

        if(idAlumnoInterface===alumnos[i].id_alumno){
            return console.log(alumnos[i])
        } else {
            console.log("accede a la posicion pero no encuentra nada en el indice Nº", i)
        }
    }
}


function modificar() {

    for(let i = 0; i < alumnos.length; i++ ) {

        if(idAlumnoInterface===alumnos[i].id_alumno){
            
            alumnos[i].nombre = "Marcos"
            console.log(alumnos[i], "Actualizacion completa")
        } else {
        }
    }
}

modificar()

//obtenerUno()

//obtenerTodos()


