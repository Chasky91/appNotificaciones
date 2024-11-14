use cent_44;
DROP TABLE if exists materia;

CREATE TABLE materia(
	id INT auto_increment primary KEY,
    nombre VARCHAR(60) NOT NULL,
    id_profe INT,
    id_carre INT,
    foreign key (id_profe) REFERENCES profesor(id),
    foreign key (id_carre) REFERENCES carrera(id)
);