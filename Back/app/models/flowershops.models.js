import { DataTypes } from "sequelize";
import sequelize from "../../config/db/database.js";

// CREATE TABLE flowershops (
//   idflowershops INT AUTO_INCREMENT,
//   fullname VARCHAR(255) NOT NULL,
//   address TEXT NOT NULL,
//   phone VARCHAR(15) NOT NULL,
//   state ENUM('Activate', 'Inactive') DEFAULT 'Activate' NOT NULL,
//   CONSTRAINT pk_idflowershops PRIMARY KEY (idflowershops)
// );

const flowerShops = sequelize.define("flowershops", {
  "idflowershops": {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  "fullname": {type: DataTypes.STRING(255), allowNull: false},
  "address": {type: DataTypes.TEXT, allowNull: false},
  "phone": {type: DataTypes.STRING(15), allowNull: false},
  "state": {type: DataTypes.ENUM('Activate', 'Inactive'), defaultValue: 'Activate', allowNull: false},
}, {timestamps: false,
    tableName: "flowershops",});

export default flowerShops;