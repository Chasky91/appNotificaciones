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
      'SELECT * FROM usuario WHERE dni = ?;',[id]
    ) 
  return  resultados[0]
}

// funcion crear
const  crear = async (alumno) => {
  // acá inserto
  const resultado = await conexion.query(
    'INSERT INTO usuario (dni, nombre, apellido, email) VALUES (?, ?, ?, ?)',
    [alumno.dni, alumno.nombre, alumno.apellido,alumno.email ]
  )
  // aca selecciono
  const alumNuevo = await conexion.query(
    `SELECT * FROM usuario WHERE dni = ?`, [alumno.dni]
  )
   
  return  alumNuevo[0]
}




const actualizar  = async (alumno, dni) => {

  // recupro las poriedades del objeto json --> alumno
  const nombre = alumno.nombre
  const apellido = alumno.apellido
  const email = alumno.gmail  
  // sentencia sql
  const sql = 'UPDATE usuario SET nombre = ?, apellido = ?, email = ? WHERE dni = ?';
  // Aca  estan las varibles a utilizar en la actualizacion
  const values = [nombre, apellido, email, dni]
  //ejecuto la sentencia
  await conexion.execute(sql, values)
  const select = 'SELECT * FROM usuario WHERE DNI = ?' // sentencia sql pararecuperar registro actualizado
  const result = await conexion.execute(select, [dni]) // ejecuto la sentencia
  return result[0]
}
/*let usuarioEJ = { 
  "nombre": "Josesito", 
  "apellido":"Konaszchuk", 
  "gmail":'Konaszchuk@gmail.com'
}
console.log(await actualizar(usuarioEJ , 49963852 ))*/

const eliminarUno  = (dni) => {

  const sql = 'DELETE FROM usuario WHERE dni= ?;'
  const values = [dni]

  conexion.execute()
}

const  alumnoModel = {
    buscarTodos,
    buscarUno,
    crear,
    actualizar,
    eliminarUno
}
export default alumnoModel