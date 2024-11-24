import mysql from "mysql2/promise"
import { config } from "../config.db.js"


// Create the connection to database
const conexion = await mysql.createConnection(config)

async function buscarTodos() {
    const resultado = await conexion.query(
        "SELECT  * FROM administrativo;",
      )
      return resultado[0]
}

//console.log(await buscarTodos())

  const buscarUno = async(id) =>{
    const resultados = await conexion.query(
      'SELECT * FROM administrativo WHERE id = ?;',[id]
    ) 
  return  resultados[0]
}
//console.log(await buscarUno(1))

// funcion crear
const  crear = async (administrativo) => {
  // acá inserto
  /*const resultado = await conexion.query(
    'INSERT INTO administrativo ( nombre, apellido, email, password_hash) VALUES (?, ?, ?, ?)',
    [ administrativo.nombre, administrativo.apellido,administrativo.email,administrativo.password_hash ]
  )*/
  const sql = 'INSERT INTO administrativo ( nombre, apellido, email, password_hash) VALUES (?, ?, ?, ?)'
  const values = [ administrativo.nombre, administrativo.apellido,administrativo.email,administrativo.password_hash ]

  const [resul] = await conexion.execute(sql,values)
  // aca selecciono
  console.log(resul.insertId, "EL resultado")
  const nuevoAdmin = await buscarUno(resul.insertId)   
  return  nuevoAdmin[0]
}
// console.log(await crear({
//   "nombre": "Miguel", 
//   "apellido":"Dimechelis", 
//   "email":'Miguel@gmail.com',
//   "password_hash":'Konaszchuk@gmail.com'
// }),"Crear uno")

//console.log( await buscarTodos())

const actualizar  = async (administratitvo, id) => {

  // recupro las poriedades del objeto json --> administratitvo
  const nombre = administratitvo.nombre
  const apellido = administratitvo.apellido
  const email = administratitvo.email  
  // sentencia sql
  const sql = 'UPDATE administrativo SET nombre = ?, apellido = ?, email = ? WHERE id = ?';
  // Aca  estan las varibles a utilizar en la actualizacion
  const values = [nombre, apellido, email, id]
  //ejecuto la sentencia
  await conexion.execute(sql, values)
  const select = 'SELECT * FROM administrativo WHERE id = ?' // sentencia sql pararecuperar registro actualizado
  const result = await conexion.execute(select, [id]) // ejecuto la sentencia
  return result[0]
}
/*let adminEj = { 
  "nombre": "Miguel", 
  "apellido":"Demichelis", 
  "email":'Miguel@gmail.com'
}
console.log(await actualizar(adminEj , 5 ))*/

const eliminarUno  = async(id) => {

  const sql = 'DELETE FROM administrativo WHERE id= ?;'
  const values = [id]

  const [result] = await conexion.execute(sql, values)
  console.log(result)
  if (result.affectedRows > 0) {
    return id
} else {
    return -1
}
}
//console.log(await eliminarUno(8));


const  administratitvoModel = {
    buscarTodos,
    buscarUno,
    crear,
    actualizar,
    eliminarUno
}
export default administratitvoModel