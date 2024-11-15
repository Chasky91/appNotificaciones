use cent_44;

select * from materia;
select * from alumno;
SELECT * FROM cent_44.profesor;

insert into matricula (id_materia, dni_alum, estado, ciclo_electivo) values 
(1,23456789, 'activo', 2024 ),
(1,12345678, 'activo', 2024 ),
(1,34567891, 'activo', 2024 ),
(1,45678912, 'activo', 2024 ),
(1,67891234, 'activo', 2024 ),
(1,78912345, 'activo', 2024 );

select * from matricula;

select  m.dni_alum, m.estado, m.ciclo_electivo,
p.nombre as nombre_profesor, p.apellido as apellido_profesor,mat.id, mat.nombre as nombre_materia		
from matricula m
inner join  materia mat
on m.id_materia = mat.id
inner join profesor p 
on p.id = mat.id_profe;