import { config } from "../config.db.js"
import mysql from "mysql2/promise"

// Create the connection to database
const conexion = await mysql.createConnection(config)

async function buscarTodos() {
    const resultado = await conexion.query(
        `select  m.nombre as nombre_materia, n.fecha_msj, n.msj, m.nombre, p.nombre, p.apellido,  count(*) as  mensajes_enviados
          from  notifica_adm_alum as n
          inner join materia as m on m.id = n.id_mat
          inner join profesor as p on p.id = m.id_profe
          group by m.nombre; `,
      )
      return resultado[0]
}
//console.log(await buscarTodos());

const buscarUno = async(admin, alumno, mat) =>{
  const resultados = await conexion.query(
    "SELECT * FROM notifica_adm_alum WHERE   id_admin = ? AND dni_alum = ? AND id_mat = ?",[admin.id, alumno.dni, mat.id]
  ) 
  return  resultados[0]
}
/*console.log(await buscarUno(
  { "id": 3 }, { "dni":91234567 }, { "id":3  }
))*/

// funcion crear
const  crear = async (admin, alumno, mat, mensaje) => {
  // acá inserto
  const resultado = await conexion.query(
    `insert into notifica_adm_alum (id_admin, dni_alum, id_mat,fecha_msj,  msj) values (?,?,?,?,?) `,
    [ admin.id, alumno.dni, mat.id, new Date(), mensaje]
  )
  console.log(resultado[0].insertId)

  // aca selecciono
  const msjNuevo = await conexion.query(
    `SELECT * FROM notifica_adm_alum WHERE id_admin = ? AND dni_alum = ? AND id_mat = ?`, [admin.id, alumno.dni, mat.id]
  )
   
  return  msjNuevo[0]
}
/*console.log(await crear(
  { "id": 3 }, { "dni":91234567 }, { "id":3  }, " El porefeso no viene"
))*/


//console.log(await eliminarUno(8))
const  mensajeModel = {
    buscarTodos,
    buscarUno,
    crear
}
export default mensajeModel