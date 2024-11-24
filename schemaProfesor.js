import z from 'zod'

const schemaProfesores = z.object( 
    {
        nombre: z.string(),
        apellido: z.string(),
    } 
)
//exportamos una funcion que hara de validadora
export function  validarProfesor(profesor) {
    //se retorna el resultado de ejecutar la funcion safeParse con el parametro de profesor
    return schemaProfesores.safeParse(profesor);
}

