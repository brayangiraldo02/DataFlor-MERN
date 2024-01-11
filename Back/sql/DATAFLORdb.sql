SHOW DATABASES;
USE dataflor;

CREATE TABLE providers(
  providerid INT AUTO_INCREMENT,
  fullname VARCHAR(255) NOT NULL,
  phone VARCHAR(15) NOT NULL,
  address TEXT NOT NULL,
  state ENUM('Activate', 'Inactive') DEFAULT 'Activate' NOT NULL,
  CONSTRAINT pk_providerid PRIMARY KEY (providerid)
);

CREATE TABLE products(
  productid INT AUTO_INCREMENT,
  productname VARCHAR(255) NOT NULL,
  description TEXT,
  price FLOAT NOT NULL,
  state ENUM('Available', 'Unavailable') DEFAULT 'Available' NOT NULL,
  CONSTRAINT pk_productid PRIMARY KEY (productid)
);

CREATE TABLE flowershops (
  idflowershops INT AUTO_INCREMENT,
  fullname VARCHAR(255) NOT NULL,
  address TEXT NOT NULL,
  phone VARCHAR(15) NOT NULL,
  state ENUM('Activate', 'Inactive') DEFAULT 'Activate' NOT NULL,
  CONSTRAINT pk_idflowershops PRIMARY KEY (idflowershops)
);

CREATE TABLE inventory (
  inventoryid INT AUTO_INCREMENT,
  idflowershops INT NOT NULL,
  productid INT NOT NULL,
  quantity INT NOT NULL CHECK (quantity > 0),
  providerid INT NOT NULL,
  state ENUM('Activate', 'Inactive') DEFAULT 'Activate' NOT NULL,
  CONSTRAINT pk_inventoryid PRIMARY KEY (inventoryid),
  CONSTRAINT fk_idflowershops FOREIGN KEY (idflowershops) REFERENCES flowershops(idflowershops),
  CONSTRAINT fk_productid FOREIGN KEY (productid) REFERENCES products(productid),
  CONSTRAINT fk_providerid FOREIGN KEY (providerid) REFERENCES providers(providerid)
);

CREATE TABLE users (
  userid INT AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(255) NOT NULL,
  fullname VARCHAR(255) NOT NULL,
  phone VARCHAR(15) NOT NULL,
  role ENUM('Admin', 'Dueño', 'Empleado') NOT NULL,
  idflowershops INT,
  state ENUM('Activate', 'Inactive') DEFAULT 'Activate' NOT NULL,
  CONSTRAINT pk_userid PRIMARY KEY (userid),
  CONSTRAINT fk_idflowershops FOREIGN KEY (idflowershops) REFERENCES flowershops(idflowershops)
);

CREATE TABLE images (
  imageid INT AUTO_INCREMENT,
  productid INT NOT NULL,
  imageurl VARCHAR(500) NOT NULL,
  CONSTRAINT pk_imageid PRIMARY KEY (imageid),
  CONSTRAINT fk_productid FOREIGN KEY (productid) REFERENCES products(productid)
);

CREATE TABLE sales (
  saleid INT AUTO_INCREMENT,
  clientname VARCHAR(255) NOT NULL,
  userid INT NOT NULL,
  productid INT NOT NULL,
  quantity INT NOT NULL CHECK (quantity > 0),
  CONSTRAINT pk_saleid PRIMARY KEY (saleid),
  CONSTRAINT fk_userid FOREIGN KEY (userid) REFERENCES users(userid),
  CONSTRAINT fk_productid FOREIGN KEY (productid) REFERENCES products(productid)
)

INSERT INTO `users` (`userid`, `username`, `password`, `fullname`, `phone`, `role`, `idflowershops`, `state`) VALUES (NULL, 'ADMIN', '123', 'Brayan Giraldo', '3215884968', 'Admin', NULL, 'Activate');