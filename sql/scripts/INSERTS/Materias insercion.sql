use cent_44;
-- ALTER TABLE materia  MODIFY COLUMN id INT AUTO_INCREMENT ;
INSERT INTO materia (nombre ,id_profe,id_carre) VALUES
( "Matematica",1,5 ),
( "Algebra",2, 4),
( "Logistica I",2,2 ),
( "Logistica II",2,2 ),
("Practicas I",1,1 );

-- SELECT * FROM cent_44.profesor;
-- SELECT * FROM cent_44.carrera;
SELECT * FROM cent_44.materia;