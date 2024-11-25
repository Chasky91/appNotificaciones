
CREATE DATABASE if not exists cent_44;
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

