import { DataTypes } from "sequelize";
import sequelize from "../../config/db/database.js";
import Products from "./products.models.js";

// CREATE TABLE images (
//   imageid INT AUTO_INCREMENT,
//   productid INT NOT NULL,
//   imageurl VARCHAR(500) NOT NULL,
//   CONSTRAINT pk_imageid PRIMARY KEY (imageid),
//   CONSTRAINT fk_productid FOREIGN KEY (productid) REFERENCES products(productid)
// );

const Images = sequelize.define
("images", {
  "imageid": {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  "productid": {type: DataTypes.INTEGER, allowNull: false},
  "imageurl": {type: DataTypes.STRING(500), allowNull: false}
}, {timestamps: false,
    tableName: "images",});
    
export default Images;