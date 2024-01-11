-- Database: DataFlor

-- DROP DATABASE IF EXISTS "DataFlor";

CREATE DATABASE "DataFlor"

USE "DataFlor";

-- Crear la tabla Providers
CREATE TABLE Providers (
  providerID SERIAL PRIMARY KEY,
  fullName VARCHAR(255) NOT NULL,
  phone VARCHAR(15) NOT NULL,
  address VARCHAR(255) NOT NULL,
  state BOOLEAN NOT NULL DEFAULT FALSE
);

-- Crear la tabla Products
CREATE TABLE Products (
  productID SERIAL PRIMARY KEY,
  productName VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(12, 2) NOT NULL,
  state BOOLEAN NOT NULL DEFAULT FALSE
);

-- Crear la tabla flowerShops
CREATE TABLE flowerShops (
  idflowerShops SERIAL PRIMARY KEY,
  fullName VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  phone VARCHAR(15) NOT NULL,
  inventoryID INT NOT NULL,
  state BOOLEAN NOT NULL DEFAULT FALSE
);

-- Crear la tabla Inventory
CREATE TABLE Inventory (
  id SERIAL PRIMARY KEY,
  inventoryID INT NOT NULL,
  productID INT NOT NULL,
  quantity INT NOT NULL,
  providerID INT NOT NULL,
  state BOOLEAN NOT NULL DEFAULT FALSE,
  FOREIGN KEY (inventoryID) REFERENCES flowerShops(idflowerShops),
  FOREIGN KEY (productID) REFERENCES Products(productID),
  FOREIGN KEY (providerID) REFERENCES Providers(providerID)
);

-- Crear la tabla Users
CREATE TABLE Users (
  userID SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(255) NOT NULL,
  fullName VARCHAR(255) NOT NULL,
  phone VARCHAR(15) NOT NULL,
  role VARCHAR(10) NOT NULL CHECK (role IN ('admin', 'owner', 'employee')),
  idflowerShops INT,
  state BOOLEAN NOT NULL DEFAULT FALSE,
  FOREIGN KEY (idflowerShops) REFERENCES flowerShops(idflowerShops)
);

-- Crear la tabla Images
CREATE TABLE Images (
  imageID SERIAL PRIMARY KEY,
  productID INT NOT NULL,
  imageURL VARCHAR(255) NOT NULL,
  FOREIGN KEY (productID) REFERENCES Products(productID)
);

CREATE TABLE Sales (
  idSales SERIAL PRIMARY KEY,
  clientName VARCHAR(255) NOT NULL,
  userID INT NOT NULL,
  productID INT NOT NULL,
  quantity INT NOT NULL CHECK (quantity > 0),
  FOREIGN KEY (userID) REFERENCES Users(userID),
  FOREIGN KEY (productID) REFERENCES Products(productID)
);