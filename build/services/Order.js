"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = _interopRequireDefault(require("../models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Order = _models.default.Order;
var OrderService = {
  getAllOrder: function getAllOrder() {
    return Order.findAll({
      attributes: ['id', 'name', 'size', 'price']
    });
  },
  getOrderById: function getOrderById(id) {
    return Order.findByPk(id, {
      attributes: ['id', 'name', 'size', 'price']
    });
  },
  createOrder: function createOrder(order) {
    Order.create({
      name: order.name,
      size: order.size,
      price: order.price
    });
    return order;
  },
  updateOrder: function updateOrder(id, order) {
    Order.update(order, {
      where: {
        id: id
      }
    });
    return order;
  },
  deleteOrder: function deleteOrder(id) {
    Order.destroy({
      where: {
        id: id
      }
    });
    return [];
  }
};
var _default = OrderService;
exports.default = _default;
//# sourceMappingURL=Order.js.map