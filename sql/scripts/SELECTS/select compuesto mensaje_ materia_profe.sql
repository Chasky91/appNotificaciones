use cent_44;

select  n.fecha_msj, n.msj, m.nombre, p.nombre, p.apellido,  count(*) as  mensajes_enviados
from  notifica_adm_alum as n
inner join materia as m on m.id = n.id_mat
inner join profesor as p on p.id = m.id_profe
group by m.nombre;
