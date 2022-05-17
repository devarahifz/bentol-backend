const express = require("express");
// import controllers
const userController = require("../controllers/userController.js");

// import middleware
const { auth } = require("../middleware/authMiddleware.js");

const router = express.Router();

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/me", auth, userController.getMe);
// TODO: fix user PUT and DELETE
// router.put("/:id", auth, userController.updateUser);
// router.delete("/:id", auth, userController.deleteUser);

module.exports = router;
