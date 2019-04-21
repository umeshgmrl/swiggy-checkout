const mongoose = require("mongoose");
const Order = require("../models/order");
const MysqlOrder = require("../models/order-mysql");
const db = require("../models/db");

exports.saveOrder = (req, res) => {
	const order = new Order(req.body);
	order.save(order => {
		return res.json(order);
	});
};

exports.getOrderDetails = async (req, res) => {
	const order = await Order.findOne({
		username: req.params.username
	});
	res.json(order);
};
