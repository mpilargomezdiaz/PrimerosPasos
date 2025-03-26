DROP DATABASE IF EXISTS AutomobileSales;

CREATE DATABASE AutomobileSales;

USE AutomobileSales;

CREATE TABLE customers (
    id_customer INT AUTO_INCREMENT,
    nif VARCHAR(10) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    address VARCHAR(200) NOT NULL,
    city VARCHAR(100) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    internal_code INT UNIQUE NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id_customer)
);

CREATE TABLE cars (
    id_car INT AUTO_INCREMENT,
    license_plate VARCHAR(20) UNIQUE NOT NULL,
    brand VARCHAR(50) NOT NULL,
    model VARCHAR(50) NOT NULL,
    color VARCHAR(30) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    PRIMARY KEY (id_car)
);

CREATE TABLE sales (
    id_sale INT AUTO_INCREMENT,
    fk_id_customer INT NOT NULL,
    fk_id_car INT NOT NULL UNIQUE,
    sale_date DATE NOT NULL,
    PRIMARY KEY (id_sale),
    FOREIGN KEY (fk_id_customer) REFERENCES customers(id_customer) ON DELETE CASCADE,
    FOREIGN KEY (fk_id_car) REFERENCES cars(id_car) ON DELETE CASCADE
);

CREATE TABLE inspections (
    id_inspection INT AUTO_INCREMENT,
    fk_id_car INT NOT NULL,
    inspection_date DATE NOT NULL,
    filter_change BOOLEAN NOT NULL DEFAULT FALSE,
    oil_change BOOLEAN NOT NULL DEFAULT FALSE,
    brake_change BOOLEAN NOT NULL DEFAULT FALSE,
    other_changes TEXT,
    PRIMARY KEY (id_inspection),
    FOREIGN KEY (fk_id_car) REFERENCES cars(id_car) ON DELETE CASCADE
);
