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

# Trigger para guardar una copia cuando se inserta un cliente
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

# Trigger para guardar una copia cuando se elimina un cliente
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

# Inserta algunos registros en la tabla Clientes
INSERT INTO Clientes (nombre_cliente, telefono_cliente, DNI_cliente) VALUES 
("Manuel Varela", "455781253", "12345678A"),
("Hikaru Morita", "455381253", "12345676B"),
("Erza", "4553841253", "12345679D");

# Elimina un cliente para probar el trigger de borrado
DELETE FROM Clientes WHERE id_cliente = 3;

# Consulta las tablas para verificar que los triggers funcionan correctamente
SELECT * FROM Clientes;
SELECT * FROM Copia_Clientes;

# Crea un procedimiento para realizar operaciones matemáticas básicas
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

    -- Manejo de error: Evitar división por 0
    IF n2 = 0 THEN
        SET division = NULL;  -- Si n2 es 0, la división queda en NULL
    ELSE
        SET division = n1 / n2;
    END IF;
END;
//
DELIMITER ;

# Llamar al procedimiento con valores de prueba
CALL Operaciones (10, 2, @suma, @resta, @multiplicacion, @division);

# Consultar los resultados
SELECT @suma, @resta, @multiplicacion, @division;
