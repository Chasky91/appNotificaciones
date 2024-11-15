use cent_44;

SELECT
	row_number() over() indice,
    alumno.dni,
    alumno.nombre AS nombre_alumno,
    alumno.apellido AS apellido_alumno,
    materia.nombre AS nombre_materia,
    profesor.nombre AS nombre_profesor,
    profesor.apellido AS apellido_profesor,
    matricula.estado,
    matricula.ciclo_electivo
FROM  alumno
JOIN  matricula ON alumno.dni = matricula.dni_alum
JOIN  materia ON matricula.id_materia = materia.id
JOIN  profesor ON materia.id_profe = profesor.id
WHERE  profesor.id = 1;

-- Maria envia un mensaje 1
select 	
		row_number() over() indice,
		p.id, p.nombre as nombre_profesor, p.apellido,
	   mat.id as id_materia,  mat.nombre as nombre_materia,
        m.estado, m.ciclo_electivo, m.dni_alum,
       a.nombre as nombre_alumno,a.apellido as apellido_alumno
from profesor p
inner join materia mat on  p.id = mat.id_profe
inner join matricula m on m.id_materia = mat.id
inner join alumno a on a.dni = m.dni_alum;

use cent_44;
insert into notifica_adm_alum (id_admin, dni_alum, id_mat, fecha_msj,msj)
select 	1, m.dni_alum, mat.id ,NOW(), "Hoy no asiste el profe Ramon "
from profesor p
inner join materia mat on  p.id = mat.id_profe
inner join matricula m on m.id_materia = mat.id
inner join alumno a on a.dni = m.dni_alum
where p.id = 1;



-- SELECT * FROM cent_44.notifica_adm_alum;

