import { DataTypes } from "sequelize";
import sequelize from "../../config/db/database.js";

// CREATE TABLE products(
//   productid INT AUTO_INCREMENT,
//   productname VARCHAR(255) NOT NULL,
//   description TEXT,
//   price FLOAT NOT NULL,
//   state ENUM('Available', 'Unavailable') DEFAULT 'Available' NOT NULL,
//   CONSTRAINT pk_productid PRIMARY KEY (productid)
// );

const products = sequelize.define
("products", {
  "productid": {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  "productname": {type: DataTypes.STRING(255), allowNull: false},
  "description": {type: DataTypes.TEXT},
  "price": {type: DataTypes.FLOAT, allowNull: false, validate: {min: 0}},
  "state": {type: DataTypes.ENUM('Available', 'Unavailable'), defaultValue: 'Available', allowNull: false},
}, {timestamps: false,
    tableName: "products"});

export default products;