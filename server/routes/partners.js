const express = require("express");
const router = express.Router();
const partnerController = require("../controllers/partner-controller");

router
	.route("/")
	.get(partnerController.getAllPartners);

router
	.route("/:id")
	.get(partnerController.getSinglePartner);

module.exports = router;
