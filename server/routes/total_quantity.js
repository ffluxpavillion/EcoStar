const express = require("express");
const router = express.Router();
const totalQuantityController = require("../controllers/total-quantity-controller");

router
  .route("/")
  .get(totalQuantityController.getTotalQuantity)
  .put(totalQuantityController.update);

module.exports = router;
