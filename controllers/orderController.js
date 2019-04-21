const mongoose = require("mongoose");
const Order = require("../models/order");

exports.saveOrder = (req, res) => {
	console.log(req.body);
	const order = new Order(req.body);
	order.save(order => {
		console.log("order", order);
		res.json(req.order);
	});
};

exports.getOrderDetails = async (req, res) => {
	const order = await Order.findOne({
		username: req.params.username
	});
	res.json(order);
};
