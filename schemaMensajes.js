import z from 'zod'

//admin, alumno, mat, mensaje
const schemaMensajes = z.object( 
    {
        id_admin:z.number().positive(), 
        id_mat:z.number().positive(),
        msj: z.string().max(150)
    } 
)
//exportamos una funcion que hara de validadora
export function  validarMensajes(Mensaje) {
    //se retorna el resultado de ejecutar la funcion safeParse con el parametro de profesor
    return schemaMensajes.safeParse(Mensaje);
}

