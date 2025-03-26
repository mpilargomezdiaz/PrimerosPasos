DROP DATABASE IF EXISTS ejerciciosClase34_5;

CREATE DATABASE ejerciciosClase34_5;
USE ejerciciosClase34_5;

CREATE TABLE Clientes (
    id_cliente INT AUTO_INCREMENT, 
    nombre_cliente VARCHAR(200), 
    telefono_cliente VARCHAR(13),
    DNI_cliente CHAR(9),
    PRIMARY KEY(id_cliente)
);

CREATE TABLE Copia_Clientes (
    id_copia_cliente INT AUTO_INCREMENT, 
    nombre_copia_cliente VARCHAR(200), 
    telefono_copia_cliente VARCHAR(13),
    DNI_copia_cliente CHAR(9),
    PRIMARY KEY(id_copia_cliente)
);


DELIMITER //
CREATE TRIGGER insercion_cliente
AFTER INSERT ON Clientes
FOR EACH ROW 
BEGIN
    INSERT INTO Copia_Clientes (nombre_copia_cliente, telefono_copia_cliente, DNI_copia_cliente) 
    VALUES (NEW.nombre_cliente, NEW.telefono_cliente, NEW.DNI_cliente);
END;
//
DELIMITER ;


DELIMITER //
CREATE TRIGGER borrado_cliente
BEFORE DELETE ON Clientes
FOR EACH ROW 
BEGIN
    INSERT INTO Copia_Clientes (nombre_copia_cliente, telefono_copia_cliente, DNI_copia_cliente) 
    VALUES (OLD.nombre_cliente, OLD.telefono_cliente, OLD.DNI_cliente);
END;
//
DELIMITER ;


INSERT INTO Clientes (nombre_cliente, telefono_cliente, DNI_cliente) VALUES 
("Manuel Varela", "455781253", "12345678A"),
("Hikaru Morita", "455381253", "12345676B"),
("Erza", "4553841253", "12345679D");


DELETE FROM Clientes WHERE id_cliente = 3;


SELECT * FROM Clientes;
SELECT * FROM Copia_Clientes;



DELIMITER //
CREATE PROCEDURE Operaciones (
    IN n1 INT, 
    IN n2 INT, 
    OUT suma INT, 
    OUT resta INT, 
    OUT multiplicacion INT,  
    OUT division DECIMAL(10,2)
)
BEGIN
    SET suma = n1 + n2;
    SET resta = n1 - n2;
    SET multiplicacion = n1 * n2;

    IF n2 = 0 THEN
        SET division = NULL;
    ELSE
        SET division = n1 / n2;
    END IF;
END;
//
DELIMITER ;


CALL Operaciones (10, 2, @suma, @resta, @multiplicacion, @division);

SELECT @suma, @resta, @multiplicacion, @division;



CREATE TABLE Albaranes_Reclamacion (
    id_albaran INT,
    fk_id_pedido INT,
    precio_material FLOAT(6,2) NOT NULL,
    PRIMARY KEY (id_albaran),
    FOREIGN KEY (fk_id_pedido)
    REFERENCES Pedidos(id_pedido)
    ON DELETE CASCADE
);


DELIMITER //
CREATE TRIGGER antes_insertar_albaran
BEFORE INSERT ON Albaranes
FOR EACH ROW
BEGIN
    DECLARE precio_registrado FLOAT(6,2);
    
    SELECT precio_material INTO precio_registrado
    FROM Materiales_Albaranes 
    WHERE fk_id_material = NEW.fk_id_material
    AND fk_id_albaran = NEW.fk_id_albaran;
    
    IF ABS(NEW.precio_material - precio_registrado) > 2 THEN
        INSERT INTO Albaranes_Reclamacion (id_albaran, fk_id_pedido, precio_material)
        VALUES (NEW.id_albaran, NEW.fk_id_pedido, NEW.precio_material);
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Precio fuera de rango';
    END IF;
END;
//
DELIMITER ;


CREATE TABLE Descripciones (
    id_descripcion INT AUTO_INCREMENT,
    id_material INT,
    descripcion_antigua VARCHAR(100),
    PRIMARY KEY (id_descripcion),
    FOREIGN KEY (id_material)
    REFERENCES Materiales(id_material)
    ON DELETE CASCADE
);

DELIMITER //
CREATE TRIGGER despues_actualizar_material
AFTER UPDATE ON Materiales
FOR EACH ROW
BEGIN
    IF OLD.descripcion <> NEW.descripcion THEN
        INSERT INTO Descripciones (id_material, descripcion_antigua)
        VALUES (OLD.id_material, OLD.descripcion);
    END IF;
END;
//
DELIMITER ;

DELIMITER //
CREATE TRIGGER despues_borrar_pedido
AFTER DELETE ON Pedidos
FOR EACH ROW
BEGIN
    DELETE FROM Albaranes WHERE fk_id_pedido = OLD.id_pedido;
END;
//
DELIMITER ;
