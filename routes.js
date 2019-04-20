const orders = require("./controllers/orderController.js");

module.exports = app => {
	app.route("/orders").post(orders.saveOrder);
};
