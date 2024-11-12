import express from 'express'
import alumnos from './alumnos.js'
import { routerAlumno } from './router/alumnoRouter.js'

//creo el servidor
const app = express()
//app.use(express.json())

//GET localhost:5000/alumnos"/"
app.use("/alumnos", routerAlumno)

//endpoints

//localhost:5000"/alumnos"
//app.get("PrimerDato-> gemento de la ruta","segundoDato-> funcion")
app.get('/alumnos', (req, res) => {
    
    //res.send() devuelve una respuesta al usuario con los datos solicitados
    re.json({"mensanje": alumnos})
})

//localhost:5000"/alumnos/id_alumno"
app.get('/alumnos/:id_alumno', (req, res) => {
   
})

//localhost:5000/alumnos/:id
//app.get(un alumno)
//app.get( todo los alumnos)

const PUERTO = 5000

app.listen(PUERTO, () => {
    console.log("Servidor andando", )
})