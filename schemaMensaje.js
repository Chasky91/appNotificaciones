import z from 'zod'

//admin, alumno, mat, mensaje
const schemaMensaje = z.object( 
    {
        id_admin:z.number().positive(), 
        dni_alum:z.number().positive(), 
        id_mat:z.number().positive(),
        msj: z.string().max(50)
    } 
)
//exportamos una funcion que hara de validadora
export function  validarMensaje(Mensaje) {
    //se retorna el resultado de ejecutar la funcion safeParse con el parametro de profesor
    return schemaMensaje.safeParse(Mensaje);
}

