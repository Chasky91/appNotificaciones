USE cent_44;

CREATE TABLE profesor (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(70) NOT NULL,
    apellido VARCHAR(70) NOT NULL
);

INSERT INTO profesor (nombre, apellido) VALUES 
('Ramon', 'González'),
('Ricardo', 'Pérez'),
('Jose', 'Rodríguez');
