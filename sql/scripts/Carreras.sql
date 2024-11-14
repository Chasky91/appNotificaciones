use cent_44;
DROP TABLE if exists carrera;
CREATE TABLE carrera(
	id INT PRIMARY KEY auto_increment,
    nombre VARCHAR(100) NOT NULL
);

INSERT INTO carrera (nombre) VALUES 
( 'Tecnicatura Superior en Administracion de Empresas'),
( 'Tecnicatura Superior en Logística y Transporte'),
( 'Tecnicatura Superior en Soporte de Infraestructura de Tecnología de la información'),
( 'Tecnicatura Superior en Petróleo'),
( 'Tecnicatura Superior en Seguridad e Higiene en el Trabajo');