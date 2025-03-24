#DROP DATABASE instituto;

CREATE DATABASE instituto;

USE instituto;

CREATE TABLE profesores (
id INT AUTO_INCREMENT,
dni CHAR(9) UNIQUE NOT NULL,
nombre VARCHAR(200) NOT NULL,
direccion VARCHAR(500) NOT NULL,
telefono VARCHAR(15) NOT NULL,
PRIMARY KEY(id)
);

INSERT INTO profesores VALUES (NULL, '11111111C', 'Manuel Varela', 'Calle Falsa 1', '345621678');
INSERT INTO profesores VALUES (NULL, '11111111B', 'Hikaru Morita', 'Calle Falsa 2', '345621679');
INSERT INTO profesores VALUES (NULL, '11111111A', 'Doremi Harukaze', 'Calle Falsa 3', '345621680');
SELECT * FROM profesores;


CREATE TABLE modulos(
id INT AUTO_INCREMENT,
codigo VARCHAR(20) UNIQUE NOT NULL,
nombre VARCHAR(100) NOT NULL,
fk_id_prof INT,
PRIMARY KEY(id),
FOREIGN KEY(fk_id_prof) REFERENCES profesores(id)
ON UPDATE SET NULL
);

INSERT INTO modulos VALUES (NULL, 'MOD420', 'Primer mod', NULL);
INSERT INTO modulos VALUES (NULL, 'MOD403', 'Segundo mod', 3);
INSERT INTO modulos VALUES (NULL, 'MOD405', 'Tercer mod', NULL);
SELECT * FROM modulos;

CREATE TABLE alumnos (
id INT AUTO_INCREMENT,
n_exp VARCHAR(20) UNIQUE NOT NULL,
nombre VARCHAR(100) NOT NULL,
apellidos VARCHAR(100) NOT NULL,
fecha_nac DATE NOT NULL,
PRIMARY KEY(id)
);

INSERT INTO alumnos VALUES (NULL, 'ALUM123', 'Cris', 'Varela', '2001-03-05');
INSERT INTO alumnos VALUES (NULL, 'ALUM567', 'Satoru', 'Gojo', '2001-12-05');
INSERT INTO alumnos VALUES (NULL, 'ALUM376', 'Suguru', 'Geto', '2001-1-05');
SELECT * FROM alumnos;

CREATE TABLE cursos (
id INT AUTO_INCREMENT,
nombre VARCHAR(100) NOT NULL,
PRIMARY KEY(id)
);

INSERT INTO cursos VALUES(NULL, '1º A');
INSERT INTO cursos VALUES(NULL, '1º B');
INSERT INTO cursos VALUES(NULL, '1º C');

CREATE TABLE alumnos_cursos(
id INT AUTO_INCREMENT,
fk_id_alumno INT NOT NULL,
fk_id_delegado INT,
fk_id_curso INT NOT NULL,
PRIMARY KEY(id),
FOREIGN KEY(fk_id_alumno) REFERENCES alumnos(id)
ON DELETE CASCADE,
FOREIGN KEY(fk_id_delegado) REFERENCES alumnos(id)
ON DELETE SET NULL,
FOREIGN KEY(fk_id_curso) REFERENCES cursos(id)
ON DELETE CASCADE
);

INSERT INTO alumnos_cursos VALUES(NULL, 1, 1, 2);
INSERT INTO alumnos_cursos VALUES(NULL, 1, NULL, 3);
INSERT INTO alumnos_cursos VALUES(NULL, 1, NULL, 1);
INSERT INTO alumnos_cursos VALUES(NULL, 2, NULL, 2);
INSERT INTO alumnos_cursos VALUES(NULL, 2, 2, 3);
INSERT INTO alumnos_cursos VALUES(NULL, 3, 3, 1);
