USE cent_44;
drop table if	exists administrativo;

CREATE TABLE administrativo (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(70) NOT NULL,
    apellido VARCHAR(70) NOT NULL,
    email VARCHAR(60) NOT NULL UNIQUE,
    password_hash VARCHAR(60) NOT NULL
);

INSERT INTO administrativo (nombre, apellido, email, password_hash) VALUES 
('María', 'González', 'aria.gonzalez@example.com', 'MaríaG'),
('Juan', 'Pérez', 'juan.perez@example.com', 'JuanP'),
('Luis', 'Rodríguez', 'luis.rodriguez@example.com', 'LuisR');

