import { config } from "../config.db.js"
import mysql from "mysql2/promise"

// Create the connection to database
const conexion = await mysql.createConnection(config)

async function buscarTodos() {
    const resultado = await conexion.query(
        `SELECT materia.id as id_mat, materia.nombre as nombre_materia,carrera.id as id_carre, carrera.nombre as nombre_carrera 
        FROM materia
        INNER JOIN carrera on  materia.id_carre = carrera.id`,
      )
      return resultado[0]
}
//console.log(await buscarTodos());

const buscarUno = async(id) =>{
  const resultados = await conexion.query(
    `SELECT materia.id as id_mat, materia.nombre as nombre_materia,carrera.id as id_carre, carrera.nombre as nombre_carrera FROM materia
      INNER JOIN carrera on  materia.id_carre = carrera.id
      WHERE materia.id = ?;`, [id]
  ) 
  return  resultados[0]
}
//console.log(await buscarUno(5));

// funcion crear
const  crear = async (materia) => {
  // acá inserto
  const resultado = await conexion.query(
    `INSERT INTO materia (nombre ,id_profe, id_carre) VALUES
    ( ?,?,? )`,
    [ materia.nombre, materia.idProfe, materia.idCarrera]
  )
  console.log(resultado[0].insertId)

  // aca selecciono
  /*const nuevo = await conexion.query(
    `SELECT * FROM materia WHERE id = ?`, [resultado[0].insertId]
  )*/

  const nuevo = await buscarUno(insertId)
   
  return  nuevo[0]
}
//console.log(await crear({"nombre": "Seguridad laboral","idProf":1, "idCarrera":5}))


const actualizar  = async (materia, id) => {

  // recupro las poriedades del objeto json --> alumno
  const nombre = materia.nombre
  const idProfe = materia.idProfe
  const idCarrera = materia.idCarrera
  // sentencia sql
  const sql = 'UPDATE materia SET nombre = ?, id_profe = ?, id_carre = ? WHERE id = ?';
  // Aca  estan las varibles a utilizar en la actualizacion
  const values = [nombre, idProfe, idCarrera, id]
  //ejecuto la sentencia
  await conexion.execute(sql, values)
  const select = 'SELECT * FROM materia WHERE id = ?' // sentencia sql pararecuperar registro actualizado
  const result = await conexion.execute(select, [id]) // ejecuto la sentencia
  return result[0]
}
// let registroEJ = { 
//   "nombre": "Comandos", 
//   "idProf": 2,
//   "idCarrera":4
// }
// console.log(await actualizar(registroEJ , 6 ))

const eliminarUno  = async (id) => {

  const sql = 'DELETE FROM materia WHERE id= ?;'
  const values = [id]

   const [result] = await conexion.execute(sql,values)
    console.log(result)
    if (result.affectedRows > 0) {
        return id
    } else {
        return -1
    }
}

//console.log(await eliminarUno(6))
const  materiaModel = {
    buscarTodos,
    buscarUno,
    crear,
    actualizar,
    eliminarUno
}
export default materiaModel