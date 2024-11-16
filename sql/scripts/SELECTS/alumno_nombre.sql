use cent_44;

select * from alumno ;

use cent_44;
select  distinct nombre
from alumno;

use cent_44;
select * from alumno;

use cent_44;
select dni * 0.05, nombre,apellido ,  celular from alumno;

use cent_44;

select *
from alumno
where nombre = 'Maria';

use cent_44;
select *
from profesor
where id  between 2 and 3;

use cent_44;
select *
from alumno
order by nombre;

use cent_44;

select profesor.nombre, profesor.apellido, materia.nombre
from profesor,  materia
where profesor.id = materia.id_profe;

use cent_44;

select profesor.nombre, apellido, materia.nombre
from profesor,  materia
where profesor.id=materia.id_profe AND materia.nombre='Algebra';

use cent_44;

select  materia.nombre as nombre_materia, apellido, profesor.nombre as nom_De_Profesor
from profesor,  materia
where profesor.id=materia.id_profe;

use cent_44;

select p.nombre, p.apellido, m.nombre
from profesor as p,  materia as m
where p.id=m.id_profe;

use cent_44;

select nombre, apellido
from profesor
where apellido like '%uez%';

use cent_44;
select *
from alumno
order by dni

use cent_44;
select *
from alumno
order by nombre asc, comision desc;

use cent_44;
select count(*)
from alumno;


use cent_44;
select *
from alumno
order by nombre asc, dni desc;

use cent_44;
select count(*)
from alumno;

use cent_44;
delete from alumno;

use cent_44;
delete from alumno
where dni = 12345678

use cent_44;
DELETE from alumno where dni = 123456789;
