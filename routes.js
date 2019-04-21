const orders = require("./controllers/orderController.js");
const express = require("express");
const path = require("path");

module.exports = app => {
	app.route("/api/orders").post(orders.saveOrder);
	app.route("/api/details/:username").get(orders.getOrderDetails);
	
	app.use(express.static("./client/build"));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "./client", "build", "index.html"));
	});
};
