import express from 'express'

//creo el servidor
const app = express()

//endpoints

//localhost:5000"/alumnos"
//app.get("PrimerDato-> gemento de la ruta","segundoDato-> funcion")
app.get('/alumnos', (req, res) => {
    
    //res.send() devuelve una respuesta al usuario con los datos solicitados
    res.send("devuelve todos los alumnos")
})

//localhost:5000/alumnos/:id
//app.get(un alumno)
//app.get( todo los alumnos)

const PUERTO = 5000

app.listen(PUERTO, () => {
    console.log("Servidor andando", )
})