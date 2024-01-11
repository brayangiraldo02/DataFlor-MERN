import express from 'express';
import inventory from '../models/inventory.models.js';
import products from '../models/products.models.js';
import sequelize from '../../config/db/database.js';

// (GET)

// Obtain all inventory
export const getInventory = async (req, res) => {
  try {
    const Inventory = await inventory.findAll();

    if (Inventory.length === 0) {
      return res.status(404).json({
        message: 'No inventory found',
      });
    }

    res.status(200).json(Inventory);
  } catch (error) {
    res.status(400).json({ message: 'Error getting inventory', error });
  }
};

export const getInventory2 = async (req, res) => {
  // Obtener todos los datos de inventario con nombres de floristerías, productos y proveedores
  try {
    const inventoryData = await sequelize.query(
      `SELECT i.inventoryid, i.idflowershops, f.fullname AS flowerShopName, i.productid, p.productname AS productName, i.quantity, i.providerid, pr.fullname AS providerName, i.state FROM inventory i INNER JOIN flowershops f ON i.idflowershops = f.idflowershops INNER JOIN products p ON i.productid = p.productid INNER JOIN providers pr ON i.providerid = pr.providerid;`,
      { type: sequelize.QueryTypes.SELECT }
    );

    if (inventoryData.length === 0) {
      return res.status(404).json({ message: 'No inventory found' });
    }

    res.status(200).json(inventoryData);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Error getting inventory', error });
  }
};

// Obtain a inventory by id
export const getInventoryById = async (req, res) => {
  try {
    const Inventory = await inventory.findByPk(req.params.id);

    if (!Inventory) {
      return res.status(404).json({
        message: 'No inventory found with that id',
      });
    }

    res.status(200).json(Inventory);
  } catch (error) {
    res.status(400).json({ message: 'Error getting inventory', error });
  }
};

// Obtain a inventory by idflowershops
export const getInventoryByIdflowerShops = async (req, res) => {
  try {
    const Inventory = await inventory.findAll({
      where: { idflowershops: req.params.idflowerShops },
    });

    if (Inventory.length === 0) {
      return res.status(404).json({
        message: 'No inventory found with that idflowerShops',
      });
    }

    res.status(200).json(Inventory);
  } catch (error) {
    res.status(400).json({ message: 'Error getting inventory', error });
  }
};

// (POST)

// Create a inventory
export const createInventory = async (req, res) => {
  try {
    const Inventory = await inventory.create(req.body);
    res.status(200).json(Inventory);
  } catch (error) {
    res.status(400).json({ message: 'Error creating inventory', error });
  }
};

// (PUT)

// Update a inventory by id
export const updateInventory = async (req, res) => {
  try {
    const Inventory = await inventory.update(req.body, {
      where: { inventoryid: req.params.id },
    });

    if (Inventory == 0) {
      return res.status(404).json({
        message: 'No inventory found with that id',
      });
    }

    res.status(200).json({ message: 'Inventory updated successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error updating inventory', error });
  }
};