module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define("order", {
    username: {
      type: DataTypes.STRING,
      required: true,
      primaryKey: true
    },
    cardName: {
      type: DataTypes.STRING,
      required: true
    },
    dateOfBirth: {
      type: DataTypes.STRING,
      required: true
    },
    cardExpiryDate: {
      type: DataTypes.STRING,
      required: true
    },
    paymentMethod: {
      type: DataTypes.STRING,
      required: true
    }
  });
  return Order;
};
