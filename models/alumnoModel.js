import mysql from "mysql2/promise"

const config = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'cent_44',
}

const conexion = await mysql.createConnection(config)

 async function buscarTodos() {
    const resultado = await conexion.query(
        "SELECT  * FROM usuario;",
      )
      console.log(resultado)
      return resultado[0]
}

const buscarUno  =  (id) => {

  let usuario
  conexion.execute(
    'SELECT * FROM usuario ;',
    function (err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
      console.log(err);
      usuario[resultado] = results
      usuario[err] = err
    }
  )
  return usuario
}

console.log(buscarUno(12345678))

const  crear = () => {

}

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