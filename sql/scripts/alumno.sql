
CREATE DATABASE cent_44;
USE cent_44;
CREATE TABLE usuario(
    dni INT PRIMARY key,
    nombre VARCHAR(70) NOT NULL,
    apellido VARCHAR(70) NOT NULL,
    email VARCHAR(70) NOT NULL UNIQUE
);


INSERT INTO usuario (dni, nombre, apellido, email) VALUES 
(45678912, 'Ana', 'García', 'ana.garcia@email.com'),
(34567891, 'Carlos', 'Rodríguez', 'carlos.rodriguez@email.com'),
(23456789, 'María', 'López', 'maria.lopez@email.com'),
(12345678, 'Juan', 'Martínez', 'juan.martinez@email.com'),
(56789123, 'Laura', 'Sánchez', 'laura.sanchez@email.com'),
(67891234, 'Pedro', 'González', 'pedro.gonzalez@email.com'),
(78912345, 'Sofia', 'Fernández', 'sofia.fernandez@email.com'),
(89123456, 'Miguel', 'Torres', 'miguel.torres@email.com'),
(91234567, 'Carmen', 'Ruiz', 'carmen.ruiz@email.com'),
(98765432, 'Diego', 'Pérez', 'diego.perez@email.com');