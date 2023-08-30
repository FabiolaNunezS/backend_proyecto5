const express = require("express");
const router = express.Router();

const {
  // updateProduct,
  // deleteProduct,
  getProductById,
  // deleteProductById,
  // updateProductById,
  getAllProducts,
} = require("../controllers/Product.controller");
const auth = require("../middlewares/auth");

router.get("/", getAllProducts);

// router.put("/", updateProduct);

// router.delete("/", deleteProduct);

router.get("/dinamica/:_id", getProductById);

// router.delete("/:_id", auth, deleteProductById);

// router.put("/:_id", auth, updateProductById);

module.exports = router;
