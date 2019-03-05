module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    name: DataTypes.STRING,
    size: DataTypes.STRING,
    price: DataTypes.INTEGER,
  }, {});
  Order.associate = (models) => {
    // associations can be defined here
  };
  return Order;
};
