import { config } from "../config.db.js"
import mysql from "mysql2/promise"

// Create the connection to database
const conexion = await mysql.createConnection(config)

async function buscarTodos() {
    const resultado = await conexion.query(
        `SELECT ma.id_materia, m.nombre, ma.dni_alum, ma.estado, ma.ciclo_electivo
         FROM matricula as ma
         INNER JOIN materia as m on  ma.id_materia = m.id;`,
      )
      return resultado[0]
}
//console.log(await buscarTodos());

const buscarUno = async(idMat, dni) =>{
  const resultados = await conexion.query(
     `SELECT ma.id_materia, m.nombre, ma.dni_alum, ma.estado, ma.ciclo_electivo
      FROM matricula as ma
      INNER JOIN materia as m on  ma.id_materia = m.id
      WHERE ma.id_materia  = ?  AND ma.dni_alum = ?`, [idMat, dni]
  ) 
  return  resultados[0]
}
//console.log(await buscarUno(2, 67891234));

// funcion crear
const  crear = async (matricula) => {
  // acá inserto
await conexion.query(
    `INSERT INTO matricula (id_materia ,dni_alum, estado,  ciclo_electivo ) VALUES
    ( ?,?,?,? )`,
    [ matricula.id_materia, matricula.dni_alum, matricula.estado,matricula.ciclo_electivo ]
  )
  //console.log(resultado)

  // aca selecciono
  const nuevo = await conexion.query(
    `SELECT * FROM matricula WHERE id_materia = ? AND dni_alum = ? `, [matricula.id_materia, matricula.dni_alum]
  )   
  return  nuevo[0]
}
//console.log(await crear({"id_materia": 1,"dni_alum":98765432, "estado":"activo","ciclo_electivo":2024 }))


const actualizar  = async (matricula,matriculaOld) => {

  // recupro las poriedades del objeto json --> alumno
  const id_materia = matricula.id_materia
  const dni_alum = matricula.dni_alum
  const estado = matricula.estado
  const cicloElectivo  = matricula.ciclo_electivo
  // sentencia sql
  const sql = 'UPDATE matricula SET id_materia = ?, dni_alum = ?, estado = ?, ciclo_electivo = ? WHERE id_materia = ? AND dni_alum =?';
  // Aca  estan las varibles a utilizar en la actualizacion
  const values = [id_materia, dni_alum, estado, cicloElectivo, matriculaOld.idMatO, matriculaOld.dniO]
  //ejecuto la sentencia
  await conexion.execute(sql, values)
  const select = 'SELECT * FROM matricula WHERE id_materia = ? AND dni_alum = ?' // sentencia sql pararecuperar registro actualizado
  const result = await conexion.execute(select, [id_materia, dni_alum]) // ejecuto la sentencia
  return result[0]
}
//  let registroEJ = { 
//    "id_materia":3 , 
//    "dni_alum": 78912345,
//    "estado":'inactivo',
//    "ciclo_electivo":2024
//  }
//  console.log(await actualizar(registroEJ, {idMatO: 2, dniO: 78912345}))

const eliminarUno  = async (id, dni) => {

  const sql = 'DELETE FROM matricula WHERE id_materia = ? AND dni_alum = ? ; '
  const values = [id, dni]

   const [result] = await conexion.execute(sql,values)
    console.log(result)
    if (result.affectedRows > 0) {
        return {id, dni}
    } else {
        return -1
    }
}

//console.log(await eliminarUno(2, 78912345))
const  matriculaModel = {
    buscarTodos,
    buscarUno,
    crear,
    actualizar,
    eliminarUno
}
export default matriculaModel