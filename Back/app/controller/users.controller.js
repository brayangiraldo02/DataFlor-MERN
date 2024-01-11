import express from "express";
import Users from "../models/users.models.js"
import jwt from "jsonwebtoken";

// (GET)

// Obtain all users
export const getUsers = async (req, res) => {
  try {
    const user = await Users.findAll();

    if (!user | (user.length === 0)) {
      return res.status(404).json({
        message: "No users found"});
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({message: "Error getting users", error});
  }
};

// Obtain a user by id
export const getUsersById = async (req, res) => {
  try {
    const user = await Users.findByPk(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "No user found with that id"});
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({message: "Error getting user", error});
  }
};

// Obtain a user by username
export const getUsersByUsername = async (req, res) => {
  try {
    const user = await Users.findOne({
      where: { username: req.params.name },
    });

    if (!user) {
      return res.status(404).json({
        message: "No user found with that username"});
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({message: "Error getting user by username", error});
  }
};

// Obtain a user by fullName
export const getUsersByFullName = async (req, res) => {
  try {
    const user = await Users.findOne({
      where: { fullname: req.params.fullname },
    });

    if (!user) {
      return res.status(404).json({
        message: "No user found with that fullName"});
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({message: "Error getting user by fullName", error});
  }
};

// Obtain a user by phone
export const getUsersByPhone = async (req, res) => {
  try {
    const user = await Users.findOne({
      where: { phone: req.params.phone },
    });

    if (!user) {
      return res.status(404).json({
        message: "No user found with that phone"});
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({message: "Error getting user by phone", error});
  }
};

// Obtain a user by role
export const getUsersByRole = async (req, res) => {
  try {
    const user = await Users.findOne({
      where: { role: req.params.role },
    });

    if (!user) {
      return res.status(404).json({
        message: "No user found with that role"});
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({message: "Error getting user by role", error});
  }
};

// Obtain a user by idflowerShops
export const getUsersByIdflowerShops = async (req, res) => {
  try {
    const user = await Users.findAll({
      where: { idflowershops: req.params.idflowershops },
    });

    if (!user) {
      return res.status(404).json({
        message: "No user found with that idflowerShops"});
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({message: "Error getting user by idflowerShops", error});
  }
};

// Obtain a user by state
export const getUsersByState = async (req, res) => {
  try {
    const user = await Users.findAll({
      where: { state: req.params.state },
    });

    if (!user) {
      return res.status(404).json({
        message: "No user found with that state"});
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({message: "Error getting user by state", error});
  }
};

// (POST)

// Create a new user
export const createUser = async (req, res) => {
  try {
    const user = await Users.create(req.body);

    res.status(201).json({
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    res.status(400).json({message: "Error creating user", error});
  }
};

// Login a user
export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await Users.findOne({ where: { username, password, state: "Activate" } });

    if (user) {
      const token = jwt.sign({user}, "kaozDF", {
        expiresIn: "30m"
      });
      res.send({ token });
    }
    else {
      res.status(400).json({message: "Error login user"});
    }
  } catch (error) {
    console.log(error);
  }
};

// (PUT)

// Update a user by id
export const updateUserById = async (req, res) => {
  try {
    const user = await Users.update(req.body, {
      where: { userid: req.params.id },
    });

    if (!user | (user.length === 0)) {
      return res.status(404).json({
        message: "No user found with that id"});
    }

    res.status(200).json({
      message: "User updated successfully",
      data: user,
    });
  } catch (error) {
    res.status(400).json({message: "Error updating user", error});
  }
};

// Update a user by username
export const updateUserByUsername = async (req, res) => {
  try {
    const user = await Users.update(req.body, {
      where: { username: req.params.name },
    });

    if (!user | (user.length === 0)) {
      return res.status(404).json({
        message: "No user found with that username"});
    }

    res.status(200).json({
      message: "User updated successfully",
      data: user,
    });
  } catch (error) {
    res.status(400).json({message: "Error updating user", error});
  }
};