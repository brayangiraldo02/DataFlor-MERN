import { DataTypes } from "sequelize";
import sequelize from "../../config/db/database.js";
import flowerShops from "./flowershops.models.js";
import Products from "./products.models.js";
import Providers from "./providers.models.js";

// CREATE TABLE inventory (
//   inventoryid INT AUTO_INCREMENT,
//   idflowershops INT NOT NULL,
//   productid INT NOT NULL,
//   quantity INT NOT NULL CHECK (quantity > 0),
//   providerid INT NOT NULL,
//   state ENUM('Activate', 'Inactive') DEFAULT 'Activate' NOT NULL,
//   CONSTRAINT pk_inventoryid PRIMARY KEY (inventoryid),
//   CONSTRAINT fk_idflowershops FOREIGN KEY (idflowershops) REFERENCES flowershops(idflowershops),
//   CONSTRAINT fk_productid FOREIGN KEY (productid) REFERENCES products(productid),
//   CONSTRAINT fk_providerid FOREIGN KEY (providerid) REFERENCES providers(providerid)
// );

const Inventory = sequelize.define
("inventory", {
  "inventoryid": {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  "idflowershops": {type: DataTypes.INTEGER, allowNull: false, references: {model: flowerShops, key: "idflowershops"}},
  "productid": {type: DataTypes.INTEGER, allowNull: false, references: {model: Products, key: "productid"}},
  "quantity": {type: DataTypes.INTEGER, allowNull: false, validate: {min: 1}},
  "providerid": {type: DataTypes.INTEGER, allowNull: false, references: {model: Providers, key: "providerid"}},
  "state": {type: DataTypes.ENUM('Activate', 'Inactive'), defaultValue: 'Activate', allowNull: false},
}, {timestamps: false,
    tableName: "inventory",});

export default Inventory;