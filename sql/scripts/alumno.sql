
-- CREATE DATABASE cent_44;
USE cent_44;
DROP table if exists alumno;

CREATE TABLE alumno(
    dni INT PRIMARY key,
    nombre VARCHAR(70) NOT NULL,
    apellido VARCHAR(70) NOT NULL,
    -- “+” + 54 + 9 + código de área sin 0 + número de móvil sin 15.
    -- Antes acá estaba el campo email
    celular VARCHAR(15) NOT NULL UNIQUE
);


INSERT INTO alumno (dni, nombre, apellido, celular) VALUES 
(45678912, 'Ana', 'García', '2994555644'),
(34567891, 'Carlos', 'Rodríguez', '2994555643'),
(23456789, 'María', 'López', '2994555642'),
(12345678, 'Juan', 'Martínez', '2994555645'),
(56789123, 'Laura', 'Sánchez', '2994555646'),
(67891234, 'Pedro', 'González', '2994555647'),
(78912345, 'Sofia', 'Fernández', '2994555649'),
(89123456, 'Miguel', 'Torres', '2994555610'),
(91234567, 'Carmen', 'Ruiz', '2994555611'),
(98765432, 'Diego', 'Pérez', '2994555612');