import { DataTypes } from "sequelize";
import sequelize from "../../config/db/database.js";
import flowerShops from "./flowershops.models.js";

// CREATE TABLE users (
//   userid INT AUTO_INCREMENT,
//   username VARCHAR(50) NOT NULL,
//   password VARCHAR(255) NOT NULL,
//   fullname VARCHAR(255) NOT NULL,
//   phone VARCHAR(15) NOT NULL,
//   role ENUM('Admin', 'Dueño', 'Empleado') NOT NULL,
//   idflowershops INT,
//   state ENUM('Activate', 'Inactive') DEFAULT 'Activate' NOT NULL,
//   CONSTRAINT pk_userid PRIMARY KEY (userid),
//   CONSTRAINT fk_idflowershops FOREIGN KEY (idflowershops) REFERENCES flowershops(idflowershops)
// );

const Users = sequelize.define
("users", {
  "userid": {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  "username": {type: DataTypes.STRING(50), allowNull: false},
  "password": {type: DataTypes.STRING(255), allowNull: false},
  "fullname": {type: DataTypes.STRING(255), allowNull: false},
  "phone": {type: DataTypes.STRING(15), allowNull: false},
  "role": {type: DataTypes.ENUM('Admin', 'Dueño', 'Empleado'), allowNull: false},
  "idflowershops": {type: DataTypes.INTEGER, references: {model: flowerShops, key: "idflowershops"}},
  "state": {type: DataTypes.ENUM('Activate', 'Inactive'), defaultValue: 'Activate', allowNull: false},
}, {timestamps: false,
    tableName: "users",});

export default Users;