import { config } from "../config.db.js"
import mysql from "mysql2/promise"

// Create the connection to database
const conexion = await mysql.createConnection(config)

async function buscarTodos() {
    const resultado = await conexion.query(
        "SELECT  * FROM profesor;",
      )
      return resultado[0]
}

  const buscarUno = async(id) =>{
    const resultados = await conexion.query(
      'SELECT * FROM profesor WHERE id = ?;',[id]
    ) 
  return  resultados[0]
}

// funcion crear
const  crear = async (profesor) => {
  // acá inserto
  const resultado = await conexion.query(
    'INSERT INTO profesor (nombre, apellido) VALUES (?, ?)',
    [ profesor.nombre, profesor.apellido]
  )
  console.log(resultado[0].insertId)

  // aca selecciono
  const profeNuevo = await conexion.query(
    `SELECT * FROM profesor WHERE id = ?`, [resultado[0].insertId]
  )
   
  return  profeNuevo[0]
}


const actualizar  = async (profesor, id) => {

  // recupro las poriedades del objeto json --> alumno
  const nombre = profesor.nombre
  const apellido = profesor.apellido
  // sentencia sql
  const sql = 'UPDATE profesor SET nombre = ?, apellido = ? WHERE id = ?';
  // Aca  estan las varibles a utilizar en la actualizacion
  const values = [nombre, apellido, id]
  //ejecuto la sentencia
  await conexion.execute(sql, values)
  const select = 'SELECT * FROM profesor WHERE id = ?' // sentencia sql pararecuperar registro actualizado
  const result = await conexion.execute(select, [id]) // ejecuto la sentencia
  return result[0]
}
/*let usuarioEJ = { 
  "nombre": "Ruben", 
  "apellido":"Cortez", 
}
console.log(await actualizar(usuarioEJ , 11 ))*/

const eliminarUno  = async (id) => {

  const sql = 'DELETE FROM profesor WHERE id= ?;'
  const values = [id]

   const [result] = await conexion.execute(sql,values)
    console.log(result)
    if (result.affectedRows > 0) {
        return `Registro con ID ${id} eliminado correctamente.`
    } else {
        return `No se encontró ningún registro con ID ${id}.`
    }
}

console.log(await eliminarUno(8))
const  alumnoModel = {
    buscarTodos,
    buscarUno,
    crear,
    actualizar,
    eliminarUno
}
export default alumnoModel