import z from 'zod'

const schemaMateria = z.object( 
    {
        nombre: z.string(),
        idProfe: z.number().positive(),
        idCarrera: z.number().positive()
    } 
)
//exportamos una funcion que hara de validadora
export function  validarMateria(materia) {
    //se retorna el resultado de ejecutar la funcion safeParse con el parametro de profesor
    return schemaMateria.safeParse(materia);
}

