import mysql from "mysql2/promise"

const config = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'cent_44',
}

// Create the connection to database
const conexion = await mysql.createConnection(config)

async function buscarTodos() {
    const resultado = await conexion.query(
        "SELECT  * FROM usuario;",
      )
      return resultado[0]
}


  const buscarUno = async(id) =>{
    const resultados = await conexion.query(
      'SELECT * FROM usuario WHERE dni = ?',[id]
    ) 
    
  return  resultados[0]
}

const  crear = async (alumno) => {
  const resultado = await conexion.query(
    'INSERT INTO usuario (dni, nombre, apellido, email) VALUES (?, ?, ?, ?)',
    [alumno.dni, alumno.nombre, alumno.apellido,alumno.email ]
  )
  console.log(resultado)
   
  return  resultado[0]
}
console.log(crear({
  "dni":41112212,
  "nombre": "Josefa",
  "apellido": "Lopez",
  "email": "Josefa.lopez@gmail.com"

}))

const actualizar  = () => {

}

const eliminarUno  = () => {

}

const  alumnoModel = {
    buscarTodos,
    buscarUno,
    crear,
    actualizar,
    eliminarUno
}
export default alumnoModel