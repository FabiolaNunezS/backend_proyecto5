const mongoose = require("mongoose");
const { Product } = require("../models/Product.model");

const getProductById = async (req, res) => {
  const { _id } = req.params;

  try {
    const product = await Product.findById(_id);
    if (product) {
      return res.status(200).json({
        message: "ok",
        detail: product,
      });
    }
    return res.status(404).json({
      message: "Product not found",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server Error",
      error,
    });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const product = await Product.find();
    if (product) {
      return res.status(200).json({
        message: "ok",
        detail: product,
      });
    }
    return res.status(404).json({
      message: "Product not found",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server Error",
      error,
    });
  }
};

module.exports = {
  getProductById,
  getAllProducts,
};
