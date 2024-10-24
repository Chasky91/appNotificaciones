//controlador

const obtenerUnAlumno = (req, res) => {

    let id = parseInt(req.params.id_alumno) //conversion de datos, poorque esta variable es un string
    //console.log( typeof id, "dato que viaja ppor la url")
    for(let i = 0; i < alumnos.length; i++ ) {
        //"4" === 4
        if(id===alumnos[i].id_alumno){ 
            //se encontro al alumno
            return res.json({"mensaje":alumnos[i]})//resultado en caso de tener exito, dado por el if
        } 
    }
    res.status(404).json({"mensanje": "el alumno no existe"})
}

const  obtenerAlumnos = (req, res) =>{

}


const  actualizarAlumno = (req, res) =>{
    
}

const  eliminarAlumnos = (req, res) =>{

}








