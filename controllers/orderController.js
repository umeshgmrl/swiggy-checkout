const mongoose = require("mongoose");
const Order = require("../models/order");
const MysqlOrder = require("../models/order-mysql");

exports.saveOrder = (req, res) => {
	const order = new Order(req.body);
	if (req.body.paymentMethod == "mongodb") {
		order.save(order => {
			return res.json(req.order);
		});
	}

	if (req.body.paymentMethod == "mysql") {
		MysqlOrder.create({
			id: 1,
			username: "bhumesh",
			cardName: "Bhumesh Domala",
			dateOfBirth: "2019-04-10",
			cardExpiryDate: "11/22",
			paymentMethod: "mysql"
		}).then(order => {
			return res.json(order);
		});
	}
};

exports.getOrderDetails = async (req, res) => {
	const order = await Order.findOne({
		username: req.params.username
	});
	res.json(order);
};
