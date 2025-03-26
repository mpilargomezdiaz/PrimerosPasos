DROP DATABASE IF EXISTS Company;

CREATE DATABASE Company;
USE Company;

CREATE TABLE clients (
    id_client INT AUTO_INCREMENT PRIMARY KEY,
    client_name VARCHAR(100) NOT NULL,
    client_lastnames VARCHAR(200) NOT NULL,
    client_dni VARCHAR(9) UNIQUE NOT NULL,
    client_address VARCHAR(200) NOT NULL,
    client_bdate DATE NOT NULL
);

CREATE TABLE providers (
    id_provider INT AUTO_INCREMENT PRIMARY KEY,
    provider_NIF VARCHAR(9) UNIQUE NOT NULL,
    provider_name VARCHAR(100) NOT NULL,
    provider_address VARCHAR(200) NOT NULL
);

CREATE TABLE products (
    id_product INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    product_code VARCHAR(50) UNIQUE NOT NULL,
    product_price DECIMAL(10,2) NOT NULL,
    fk_id_provider INT NOT NULL,
    FOREIGN KEY (fk_id_provider) REFERENCES providers(id_provider) ON DELETE CASCADE
);

CREATE TABLE purchases (
    id_purchase INT AUTO_INCREMENT PRIMARY KEY,
    fk_id_client INT NOT NULL,
    fk_id_product INT NOT NULL,
    quantity INT NOT NULL CHECK (quantity > 0),
    FOREIGN KEY (fk_id_client) REFERENCES clients(id_client) ON DELETE CASCADE,
    FOREIGN KEY (fk_id_product) REFERENCES products(id_product) ON DELETE CASCADE
);
