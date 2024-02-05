const express = require("express");
const router = express.Router();
const userController = require("../controllers/user-controller");

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createNewUser);

router
  .route("/total")
  .get(userController.getTotalUsers);

router
  .route("/login")
  .post(userController.login);

router
  .route("/:id")
  .get(userController.getSingleUser);

module.exports = router;
