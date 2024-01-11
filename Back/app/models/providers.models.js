import { DataTypes } from "sequelize";
import sequelize from "../../config/db/database.js";

// CREATE TABLE providers(
//   providerid INT AUTO_INCREMENT,
//   fullname VARCHAR(255) NOT NULL,
//   phone VARCHAR(15) NOT NULL,
//   address TEXT NOT NULL,
//   state ENUM('Activate', 'Inactive') DEFAULT 'Activate' NOT NULL,
//   CONSTRAINT pk_providerid PRIMARY KEY (providerid)
// );

const providers = sequelize.define
("providers", {
  "providerid": {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  "fullname": {type: DataTypes.STRING(255), allowNull: false},
  "phone": {type: DataTypes.STRING(15), allowNull: false},
  "address": {type: DataTypes.TEXT, allowNull: false},
  "state": {type: DataTypes.ENUM('Activate', 'Inactive'), defaultValue: 'Activate', allowNull: false},
}, {timestamps: false,
    tableName: "providers"});

export default providers;