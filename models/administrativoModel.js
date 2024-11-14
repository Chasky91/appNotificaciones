import mysql from "mysql2/promise"

const config = {
  host: 'localhost',
  port: 3307,
  user: 'root',
  password: 'root',
  database: 'cent_44',
}

// Create the connection to database
const conexion = await mysql.createConnection(config)

async function buscarTodos() {
    const resultado = await conexion.query(
        "SELECT  * FROM administrativo;",
      )
      return resultado[0]
}


  const buscarUno = async(id) =>{
    const resultados = await conexion.query(
      'SELECT * FROM administrativo WHERE id = ?;',[id]
    ) 
  return  resultados[0]
}

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
  console.log(resul)
  const nuevoAdmin = await buscarUno(resul.insertId)   
  return  nuevoAdmin[0]
}
/*console.log(await crear({
  "nombre": "Hugo", 
  "apellido":"Konaszchuk", 
  "email":'Hugo@gmail.com',
  "password_hash":'Konaszchuk@gmail.com'
}),"Crear uno")*/

//console.log( await buscarTodos())




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

const eliminarUno  = async(id) => {

  const sql = 'DELETE FROM administrativo WHERE id= ?;'
  const values = [id]

  const resul = await conexion.execute(sql, values)
  console.log(resul)
}
console.log(await eliminarUno(4));


const  alumnoModel = {
    buscarTodos,
    buscarUno,
    crear,
    actualizar,
    eliminarUno
}
export default alumnoModel