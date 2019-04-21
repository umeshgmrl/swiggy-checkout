const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
	username: { type: String, required: true },
	cardName: { type: String, required: true },
	dateOfBirth: { type: String, required: true },
	cardExpiryDate: { type: String, required: true },
	paymentMethod: { type: String, required: true }
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
