USE cent_44;
DROP TABLE if exists notifica_adm_alum;
CREATE TABLE notifica_adm_alum (
	id_admin INT,
    dni_alum INT,
    id_mat INT,
    fecha_msj DATE DEFAULT(current_timestamp),
    msj VARCHAR(200) NOT NULL,
    PRIMARY KEY(id_admin, dni_alum, id_mat),
    FOREIGN KEY (id_admin) REFERENCES administrativo(id),
    FOREIGN KEY (dni_alum) REFERENCES alumno(dni),
    FOREIGN KEY (id_mat) REFERENCES materia(id)  
);

