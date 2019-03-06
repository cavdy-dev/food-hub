module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    name: DataTypes.STRING,
    size: DataTypes.STRING,
    price: DataTypes.INTEGER,
  }, {});
  Order.associate = (models) => {
    Order.belongsTo(models.User);
  };
  return Order;
};
