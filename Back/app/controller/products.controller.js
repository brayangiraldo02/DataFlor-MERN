import express from 'express';
import products from '../models/products.models.js';

// (GET)

// Obtain all products
export const getProducts = async (req, res) => {
  try {
    const Products = await products.findAll();

    if (Products.length === 0) {
      return res.status(404).json({
        message: 'No products found',
      });
    }

    res.status(200).json(Products);
  } catch (error) {
    res.status(400).json({ message: 'Error getting products', error });
  }
};

// Obtain a product by id
export const getProductById = async (req, res) => {
  try {
    const Products = await products.findByPk(req.params.id);

    if (!Products) {
      return res.status(404).json({
        message: 'No product found with that id',
      });
    }

    res.status(200).json(Products);
  } catch (error) {
    res.status(400).json({ message: 'Error getting product', error });
  }
};

// Obtain a product by name
export const getProductByName = async (req, res) => {
  try {
    const Products = await products.findOne({
      where: { productname: req.params.name },
    });

    if (!Products) {
      return res.status(404).json({
        message: 'No product found with that name',
      });
    }

    res.status(200).json(Products);
  } catch (error) {
    res.status(400).json({ message: 'Error getting product by name', error });
  }
};

// (POST)

// Create a new product
export const createProduct = async (req, res) => {
  try {
    const Product = await products.create(req.body);

    res.status(201).json(Product);
  } catch (error) {
    res.status(400).json({ message: 'Error creating product', error });
  }
};

// (PUT)

// Update a product by id
export const updateProduct = async (req, res) => {
  try {
    const Product = await products.update(req.body, {
      where: { productid: req.params.id },
    });

    if (!Product) {
      return res.status(404).json({
        message: 'No product found with that id',
      });
    }

    res.status(200).json(Product);
  } catch (error) {
    res.status(400).json({ message: 'Error updating product', error });
  }
};