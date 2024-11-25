import z from 'zod'

const schemaMatricula = z.object( 
    {
        id_materia:z.number().positive(),
        dni_alum: z.number().positive(),	
        estado:	z.string().max(12),
        ciclo_electivo: z.number().positive()	

    } 
)
//exportamos una funcion que hara de validadora
export function  validarMatricula(Matricula) {
    //se retorna el resultado de ejecutar la funcion safeParse con el parametro de profesor
    return schemaMatricula.safeParse(Matricula);
}

