import express from 'express'
import alumnos from './alumnos.js'

//creo el servidor
const app = express()

//endpoints

//localhost:5000"/alumnos"
//app.get("PrimerDato-> gemento de la ruta","segundoDato-> funcion")
app.get('/alumnos', (req, res) => {
    
    //res.send() devuelve una respuesta al usuario con los datos solicitados
    res.json({"mensanje": alumnos})
})

//localhost:5000"/alumnos/id_alumno"
app.get('/alumnos/:id_alumno', (req, res) => {

    let id = req.params.id_alumno //conversion de datos, poorque esta variable es un string
    console.log(id)
    for(let i = 0; i < alumnos.length; i++ ) {

        if(id===alumnos[i].id_alumno){ 
            return console.log(alumnos[i])
        } else {
            console.log("accede a la posicion pero no encuentra nada en el indice Nº", i)
        }
    }
    res.json({"mensanje": "Es te endpoint solo devuelve una Alumno"})
})

//localhost:5000/alumnos/:id
//app.get(un alumno)
//app.get( todo los alumnos)

const PUERTO = 5000

app.listen(PUERTO, () => {
    console.log("Servidor andando", )
})