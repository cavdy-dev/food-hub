"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(sequelize, DataTypes) {
  var Order = sequelize.define('Order', {
    name: DataTypes.STRING,
    size: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {});

  Order.associate = function (models) {
    Order.belongsTo(models.User);
  };

  return Order;
};

exports.default = _default;
//# sourceMappingURL=Order.js.map