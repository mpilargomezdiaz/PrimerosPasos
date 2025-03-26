DROP DATABASE IF EXISTS Transport_company;

CREATE DATABASE Transport_company;
USE Transport_company;

CREATE TABLE provinces (
    id_province INT AUTO_INCREMENT PRIMARY KEY,
    province_code VARCHAR(5) UNIQUE NOT NULL,
    province_name VARCHAR(100) NOT NULL
);

CREATE TABLE packages (
    id_package INT AUTO_INCREMENT PRIMARY KEY,
    package_code VARCHAR(100) UNIQUE NOT NULL,
    package_description VARCHAR(500) NOT NULL,
    package_consignee VARCHAR(300) NOT NULL,
    package_consignee_address VARCHAR(200) NOT NULL,
    fk_id_province INT NOT NULL,
    FOREIGN KEY (fk_id_province) REFERENCES provinces(id_province) ON DELETE CASCADE
);

CREATE TABLE drivers (
    id_driver INT AUTO_INCREMENT PRIMARY KEY,
    driver_dni VARCHAR(9) UNIQUE NOT NULL,
    driver_name VARCHAR(100) NOT NULL,
    driver_mobile VARCHAR(12) UNIQUE NOT NULL,
    driver_address VARCHAR(200) NOT NULL,
    driver_salary DECIMAL(10,2) NOT NULL,
    driver_town VARCHAR(100) NOT NULL
);

ALTER TABLE packages ADD COLUMN fk_id_driver INT NOT NULL;
ALTER TABLE packages ADD FOREIGN KEY (fk_id_driver) REFERENCES drivers(id_driver) ON DELETE CASCADE;

CREATE TABLE trucks (
    id_truck INT AUTO_INCREMENT PRIMARY KEY,
    truck_numberplate VARCHAR(7) UNIQUE NOT NULL,
    truck_model VARCHAR(100) NOT NULL,
    truck_type VARCHAR(100) NOT NULL,
    truck_power DECIMAL(10,2) NOT NULL
);

CREATE TABLE deliveries (
    id_delivery INT AUTO_INCREMENT PRIMARY KEY,
    fk_id_driver INT NOT NULL,
    fk_id_truck INT NOT NULL,
    delivery_date DATE NOT NULL,
    FOREIGN KEY (fk_id_driver) REFERENCES drivers(id_driver) ON DELETE CASCADE,
    FOREIGN KEY (fk_id_truck) REFERENCES trucks(id_truck) ON DELETE CASCADE
);
