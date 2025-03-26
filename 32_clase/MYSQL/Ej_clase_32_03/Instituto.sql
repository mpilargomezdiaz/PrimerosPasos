DROP DATABASE IF EXISTS instituto;
CREATE DATABASE instituto;
USE instituto;


CREATE TABLE profesores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    dni CHAR(9) UNIQUE NOT NULL,
    nombre VARCHAR(200) NOT NULL,
    direccion VARCHAR(500) NOT NULL,
    telefono VARCHAR(15) NOT NULL
);

INSERT INTO profesores VALUES (NULL, '11111111C', 'Manuel Varela', 'Calle Falsa 1', '345621678');
INSERT INTO profesores VALUES (NULL, '11111111B', 'Hikaru Morita', 'Calle Falsa 2', '345621679');
INSERT INTO profesores VALUES (NULL, '11111111A', 'Doremi Harukaze', 'Calle Falsa 3', '345621680');


CREATE TABLE modulos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    codigo VARCHAR(20) UNIQUE NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    fk_id_prof INT,
    FOREIGN KEY(fk_id_prof) REFERENCES profesores(id) ON UPDATE CASCADE ON DELETE SET NULL
);

INSERT INTO modulos VALUES (NULL, 'MOD420', 'Primer módulo', NULL);
INSERT INTO modulos VALUES (NULL, 'MOD403', 'Segundo módulo', 3);
INSERT INTO modulos VALUES (NULL, 'MOD405', 'Tercer módulo', NULL);


CREATE TABLE alumnos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    n_exp VARCHAR(20) UNIQUE NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    fecha_nac DATE NOT NULL
);

INSERT INTO alumnos VALUES (NULL, 'ALUM123', 'Cris', 'Varela', '2001-03-05');
INSERT INTO alumnos VALUES (NULL, 'ALUM567', 'Satoru', 'Gojo', '2001-12-05');
INSERT INTO alumnos VALUES (NULL, 'ALUM376', 'Suguru', 'Geto', '2001-01-05');


CREATE TABLE cursos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

INSERT INTO cursos VALUES(NULL, '1º A');
INSERT INTO cursos VALUES(NULL, '1º B');
INSERT INTO cursos VALUES(NULL, '1º C');


CREATE TABLE alumnos_cursos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fk_id_alumno INT NOT NULL,
    fk_id_delegado INT,
    fk_id_curso INT NOT NULL,
    FOREIGN KEY(fk_id_alumno) REFERENCES alumnos(id) ON DELETE CASCADE,
    FOREIGN KEY(fk_id_delegado) REFERENCES alumnos(id) ON DELETE SET NULL,
    FOREIGN KEY(fk_id_curso) REFERENCES cursos(id) ON DELETE CASCADE
);

INSERT INTO alumnos_cursos VALUES(NULL, 1, 1, 2);
INSERT INTO alumnos_cursos VALUES(NULL, 1, NULL, 3);
INSERT INTO alumnos_cursos VALUES(NULL, 1, NULL, 1);
INSERT INTO alumnos_cursos VALUES(NULL, 2, NULL, 2);
INSERT INTO alumnos_cursos VALUES(NULL, 2, 2, 3);
INSERT INTO alumnos_cursos VALUES(NULL, 3, 3, 1);


CREATE TABLE alumnos_modulos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fk_id_alumno INT NOT NULL,
    fk_id_modulo INT NOT NULL,
    FOREIGN KEY(fk_id_alumno) REFERENCES alumnos(id) ON DELETE CASCADE,
    FOREIGN KEY(fk_id_modulo) REFERENCES modulos(id) ON DELETE CASCADE
);

INSERT INTO alumnos_modulos VALUES(NULL, 1, 1);
INSERT INTO alumnos_modulos VALUES(NULL, 1, 2);
INSERT INTO alumnos_modulos VALUES(NULL, 2, 2);
INSERT INTO alumnos_modulos VALUES(NULL, 3, 3);
