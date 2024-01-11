import { DataTypes } from "sequelize";
import sequelize from "../../config/db/database.js";
import Users from "./users.models.js";
import Products from "./products.models.js";

// CREATE TABLE sales (
//   saleid INT AUTO_INCREMENT,
//   clientname VARCHAR(255) NOT NULL,
//   userid INT NOT NULL,
//   productid INT NOT NULL,
//   quantity INT NOT NULL CHECK (quantity > 0),
//   CONSTRAINT pk_saleid PRIMARY KEY (saleid),
//   CONSTRAINT fk_userid FOREIGN KEY (userid) REFERENCES users(userid),
//   CONSTRAINT fk_productid FOREIGN KEY (productid) REFERENCES products(productid)
// )

const sales = sequelize.define
("sales", {
  "saleid": {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  "clientname": {type: DataTypes.STRING(255), allowNull: false},
  "userid": {type: DataTypes.INTEGER, allowNull: false, references: {model: Users, key: "userid"}},
  "productid": {type: DataTypes.INTEGER, allowNull: false, references: {model: Products, key: "productid"}},
  "quantity": {type: DataTypes.INTEGER, allowNull: false, validate: {min: 1}},
}, {timestamps: false,
    tableName: "sales",});

export default sales;