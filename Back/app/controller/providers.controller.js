import express from "express";
import providers from "../models/providers.models.js";

// (GET)

// Obtain all providers
export const getProviders = async (req, res) => {
  try {
    const Providers = await providers.findAll();

    if (Providers.length === 0) {
      return res.status(404).json({
        message: "No providers found"});
    }

    res.status(200).json(Providers);
  } catch (error) {
    res.status(400).json({message: "Error getting providers", error});
  }
};

// Obtain a provider by id
export const getProviderById = async (req, res) => {
  try {
    const Providers = await providers.findByPk(req.params.id);

    if (!Providers) {
      return res.status(404).json({
        message: "No provider found with that id"});
    }

    res.status(200).json(Providers);
  } catch (error) {
    res.status(400).json({message: "Error getting provider", error});
  }
};

// Obtain a provider by name
export const getProviderByName = async (req, res) => {
  try {
    const Providers = await providers.findOne({
      where: { fullname: req.params.name },
    });

    if (!Providers) {
      return res.status(404).json({
        message: "No provider found with that name"});
    }

    res.status(200).json(Providers);
  } catch (error) {
    res.status(400).json({message: "Error getting provider by name", error});
  }
};

// Obtain a provider by phone
export const getProviderByPhone = async (req, res) => {
  try {
    const Providers = await providers.findOne({
      where: { phone: req.params.phone },
    });

    if (!Providers) {
      return res.status(404).json({
        message: "No provider found with that phone"});
    }

    res.status(200).json(Providers);
  } catch (error) {
    res.status(400).json({message: "Error getting provider by phone", error});
  }
};

// Obtain a provider by address
export const getProviderByAddress = async (req, res) => {
  try {
    const Providers = await providers.findOne({
      where: { address: req.params.address },
    });

    if (!Providers) {
      return res.status(404).json({
        message: "No provider found with that address"});
    }

    res.status(200).json(Providers);
  } catch (error) {
    res.status(400).json({message: "Error getting provider by address", error});
  }
};

// Obtain a provider by state
export const getProviderByState = async (req, res) => {
  try {
    const Providers = await providers.findAll({
      where: { state: req.params.state },
    });

    if (!Providers) {
      return res.status(404).json({
        message: "No provider found with that state"});
    }

    res.status(200).json(Providers);
  } catch (error) {
    res.status(400).json({message: "Error getting provider by state", error});
  }
};

// (POST)

// Create a new provider
export const createProvider = async (req, res) => {
  try {
    const Providers = await providers.create(req.body);

    res.status(201).json(Providers);
  } catch (error) {
    res.status(400).json({message: "Error creating provider", error});
  }
};

// (PUT)

// Update a provider by id
export const updateProviderById = async (req, res) => {
  try {
    const Providers = await providers.update(req.body, {
      where: { id: req.params.id },
    });

    if (Providers == 0) {
      return res.status(404).json({
        message: "No provider found with that id"});
    }

    res.status(200).json(Providers);
  } catch (error) {
    res.status(400).json({message: "Error updating provider by id", error});
  }
};

// Update a provider by name
export const updateProviderByName = async (req, res) => {
  try {
    const Providers = await providers.update(req.body, {
      where: { name: req.params.name },
    });

    if (Providers == 0) {
      return res.status(404).json({
        message: "No provider found with that name"});
    }

    res.status(200).json(Providers);
  } catch (error) {
    res.status(400).json({message: "Error updating provider by name", error});
  }
};