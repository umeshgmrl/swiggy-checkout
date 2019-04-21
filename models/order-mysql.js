const Sequelize = require("sequelize");
const { mysqlConnectionString } = require("../config");

const sequelize = new Sequelize(mysqlConnectionString);

var Order = sequelize.define(
	"order",
	{
		username: {
			type: Sequelize.STRING(50),
			allowNull: false,
			primaryKey: true
		},
		cardName: {
			type: Sequelize.STRING(50),
			allowNull: false
		},
		dateOfBirth: {
			type: Sequelize.STRING(50),
			allowNull: false
		},
		cardExpiryDate: {
			type: Sequelize.STRING(50),
			allowNull: false
		},
		paymentMethod: {
			type: Sequelize.STRING(50),
			allowNull: false
		}
	},
	{
		timestamps: false
	}
);

module.exports = Order;
