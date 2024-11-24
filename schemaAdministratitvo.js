import z from 'zod'

const schemaAdministratitvo = z.object( 
    {
        nombre: z.string(),
        apellido: z.string(),
        email: z.string().email(),
        apellido: z.string(),
        password_hash:z.string()   
    } 
)
export function  validarAdministrativo(administratitvo) {
    return schemaAdministratitvo.safeParse(administratitvo);
}

