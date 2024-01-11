import express from "express";
import flowerShops from "../models/flowershops.models.js";

// (GET)

// Obtain all flower shops
export const getFlowerShops = async (req, res) => {
  try {
    const flowerShop = await flowerShops.findAll();

    if (flowerShop.length === 0) {
      return res.status(404).json({
        message: "No flower shops found"});
    }

    res.status(200).json(flowerShop);
  } catch (error) {
    res.status(400).json({message: "Error getting flower shops", error});
  }
};

// Obtain a flower shop by id
export const getFlowerShopById = async (req, res) => {
  try {
    const flowerShop = await flowerShops.findByPk(req.params.id);

    if (!flowerShop) {
      return res.status(404).json({
        message: "No flower shop found with that id"});
    }

    res.status(200).json(flowerShop);
  } catch (error) {
    res.status(400).json({message: "Error getting flower shop", error});
  }
};

// Obtain a flower shop by name
export const getFlowerShopByName = async (req, res) => {
  try {
    const flowerShop = await flowerShops.findOne({
      where: { fullname: req.params.name },
    });

    if (!flowerShop) {
      return res.status(404).json({
        message: "No flower shop found with that name"});
    }

    res.status(200).json(flowerShop);
  } catch (error) {
    res.status(400).json({message: "Error getting flower shop by name", error});
  }
};

// Obtain a flower shop by address
export const getFlowerShopByAddress = async (req, res) => {
  try {
    const flowerShop = await flowerShops.findOne({
      where: { address: req.params.address },
    });

    if (!flowerShop) {
      return res.status(404).json({
        message: "No flower shop found with that address"});
    }

    res.status(200).json(flowerShop);
  } catch (error) {
    res.status(400).json({message: "Error getting flower shop by address"});
  }
};

// Obtain a flower shop by phone
export const getFlowerShopByPhone = async (req, res) => {
  try {
    const flowerShop = await flowerShops.findOne({
      where: { phone: req.params.phone },
    });

    if (!flowerShop) {
      return res.status(404).json({
        message: "No flower shop found with that phone"});
    }

    res.status(200).json(flowerShop);
  } catch (error) {
    res.status(400).json({message: "Error getting flower shop by phone"});
  }
};

// Obtain a flower shop by state
export const getFlowerShopByState = async (req, res) => {
  try {
    const flowerShop = await flowerShops.findOne({
      where: { state: req.params.state },
    });

    if (!flowerShop) {
      return res.status(404).json({
        message: "No flower shop found with that state"});
    }

    res.status(200).json(flowerShop);
  } catch (error) {
    res.status(400).json({message: "Error getting flower shop by state"});
  }
};

// (POST)

// Create a flower shop
export const createFlowerShop = async (req, res) => {
  try {
    const flowerShop = await flowerShops.create(req.body);
    res.status(201).json({
      message: "Flower shop created successfully",
      data: flowerShop,
    })
  } catch (error) {
    res.status(400).json({message: "Error creating flower shop", error});
  }
};

// (PUT)

// Update a flower shop by id
export const updateFlowerShopById = async (req, res) => {
  try {
    const flowerShop = await flowerShops.update(req.body, {
      where: { idflowershops: req.params.id },
    });

    if (!flowerShop) {
      return res.status(404).json({
        message: "No flower shop found with that id"});
    }

    res.status(200).json({
      message: "Flower shop updated successfully",
      data: flowerShop,
    });
  } catch (error) {
    res.status(400).json({message: "Error updating flower shop", error});
  }
};

// Update a flower shop by Fullname
export const updateFlowerShopByFullname = async (req, res) => {
  try {
    const flowerShop = await flowerShops.update(req.body, {
      where: { fullname: req.params.name },
    });

    if (!flowerShop) {
      return res.status(404).json({
        message: "No flower shop found with that fullname"});
    }

    res.status(200).json({
      message: "Flower shop updated successfully",
      data: flowerShop,
    });
  } catch (error) {
    res.status(400).json({message: "Error updating flower shop", error});
  }
};

