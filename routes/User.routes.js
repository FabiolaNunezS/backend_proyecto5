const express = require("express");

const router = express.Router();

const {
  signup,
  getUsers,
  updateUser,
  deleteUser,
  login,
  getUserById,
  deleteUserById,
  updateUserById,
} = require("../controllers/User.controller");
const auth = require("../middlewares/auth");

router.get("/", getUsers);

router.post("/", signup);

router.put("/", updateUser);

router.delete("/", deleteUser);

router.post("/login", login);

router.get("/:_id", auth, getUserById);

router.delete("/:_id", auth, deleteUserById);

router.put("/:_id", auth, updateUserById);
module.exports = router;
