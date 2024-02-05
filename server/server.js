const express = require("express");
const app = express();

// env variables
require("dotenv").config();
const { PORT } = process.env;

// cors
const cors = require("cors");
app.use(cors());

// static assets
app.use(express.static("public"));

// json body parser
app.use(express.json());

// home route
app.get("/", function (req, res) {
	res.send("Welcome to EcoStar API");
});

// Routes
const commuteTrackingRoutes = require("./routes/commute_tracking");
app.use("/commute", commuteTrackingRoutes);

const userRoutes = require("./routes/users");
app.use("/users", userRoutes);

const partnerRoutes = require("./routes/partners");
app.use("/partners", partnerRoutes);

const totalQuantityRoutes = require("./routes/total_quantity");
app.use("/totalQuantity", totalQuantityRoutes);

app.listen(PORT, function () {
	console.log("Ecostar-api launched!");
});
