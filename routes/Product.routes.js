const express = require("express");

const router = express.Router();

const {
  signup,
  getProduct,
  updateProduct,
  deleteProduct,
  login,
  getProductsById,
  deleteProductById,
  updateProductById,
} = require("../controllers/Product.controller");
const auth = require("../middlewares/auth");

router.get("/", getProduct);

router.post("/signup", signup);

router.put("/", updateProduct);

router.delete("/", deleteProduct);

router.post("/login", login);

router.get("/:_id", auth, getProductById);

router.delete("/:_id", auth, deleteProductById);

module.exports = router;
