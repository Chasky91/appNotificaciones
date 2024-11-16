use cent_44;

select *
from profesor
where id  between 3 and 5;

use cent_44;

select profesor.nombre, apellido, materia.nombre
from profesor,  materia
where profesor.id=materia.id_profe;

use cent_44;

select profesor.nombre, apellido, materia.nombre
from profesor,  materia
where profesor.id=materia.id_profe AND materia.nombre='Algebra';

Use cent_44;

select  materia.nombre, apellido, nombre
from profesor,  materia
where profesor.id=materia.id_profe;

use cent_44;
select  materia.nombre as nombre_materia, apellido, profesor.nombre
from profesor,  materia
where profesor.id=materia.id_profe;

use cent_44;
select p.nombre, p.apellido, m.nombre
from profesor as p,  materia as m
where p.id = m.id_profe;

use cent_44;
select p.nombre, p.apellido, m.nombre
from profesor as p,  profesor as p
where p.id = m.id_profe;

use cent_44;
select nombre, apellido
from profesor
where apellido like '%ez%';

use cent_44;
select p.id as id_profesor, p.nombre, p.apellido, 
		mat.id as ide_de_materia, mat.nombre as nombre_materia, mat.id_carre, mat.id_profe
from profesor as p
inner join materia as mat on p.id = mat.id_profe;




