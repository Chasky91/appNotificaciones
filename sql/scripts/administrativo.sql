USE cent_44;
drop table if	exists administrativo;

CREATE TABLE administrativo (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(70) NOT NULL,
    apellido VARCHAR(70) NOT NULL,
    email VARCHAR(60) NOT NULL UNIQUE,
    password_hash VARCHAR(60) NOT NULL
);

