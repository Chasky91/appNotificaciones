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
        group by m.nombre, n.fecha_msj, n.msj, m.nombre, p.nombre, p.apellido  ; `,
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

const buscarMatriculados = async(estado, id) =>{
  const resultados = await conexion.query(
    "SELECT id_materia, dni_alum FROM matricula WHERE   estado = ? AND id_materia = ?",[estado,id ]
  ) 
  return  resultados[0].map( ({id_materia, dni_alum}) => [ id_materia, dni_alum])
}



// funcion crear
const  crear = async ({id_admin, dni_alum, id_mat,msj}) => {
  // acá inserto
  const resultado = await conexion.query(
    `insert into notifica_adm_alum (id_admin, dni_alum, id_mat,fecha_msj,  msj) values (?,?,?,?,?) `,
    [ id_admin, dni_alum, id_mat, new Date(), msj]
  )
  console.log(resultado[0].insertId)

  // aca selecciono
  const msjNuevo = await conexion.query(
    `SELECT * FROM notifica_adm_alum WHERE id_admin = ? AND dni_alum = ? AND id_mat = ?`, [  id_admin, dni_alum, id_mat]
  )
   
  return  msjNuevo[0]
}
//funcion para enviar mensaje por grupos 
const  crearPorGrupos = async ({id_admin,  id_mat,msj}) => {
  // acá inserto
  let matriculados = await buscarMatriculados('activo', id_mat)
  const values = matriculados.map(([id, dni]) => [id_admin, dni,id, new Date(), msj ])

  const resultado = await conexion.query(
    `insert into notifica_adm_alum (id_admin, dni_alum, id_mat,fecha_msj,  msj) values ?`, [values]
  )
  console.log(resultado)

  // aca selecciono
  const msjNuevo = await conexion.query(
    `SELECT * FROM notifica_adm_alum WHERE id_admin = ?  AND id_mat = ?`, [  id_admin, id_mat]
  )
   
  return  msjNuevo[0]
}
// console.log(await crearPorGrupos({ 
//     "id_admin": 3,
//       "id_mat": 2,
//       "msj": "HOy el prfesor no asiste por cuestiones de salud" })
//     )


//console.log(await eliminarUno(8))
const  mensajeModel = {
    buscarTodos,
    buscarUno,
    crear,
    crearPorGrupos
}
export default mensajeModel