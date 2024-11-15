use cent_44;

select nombre from alumno ;

use cent_44;

select distinct nombre
from alumno

use cent_44;
select * from alumno;

use cent_44;
select dni * 10, nombre,apellido ,  celular from alumno;


use cent_44;
select *
from alumno
order by nombre;

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
