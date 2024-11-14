USE cent_44;

DROP TABLE if exists matricula;

-- El estado determina si esta cursando o abandono

CREATE TABLE matricula (
	id_materia INT,
    dni_alum INT,
    estado ENUM('activo', 'inactivo	') default	'activo',
    ciclo_electivo INT NOT NULL,
    PRIMARY KEY(id_materia, dni_alum),
    FOREIGN KEY (id_materia) REFERENCES materia(id),
    FOREIGN KEY (dni_alum) REFERENCES alumno(dni)
);

