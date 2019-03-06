"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _Order = _interopRequireDefault(require("../services/Order"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var message = 'You must be logged in to order';
var OrderController = {
  createOrder: function createOrder(req, res) {
    var newOrder = req.body;

    var createdOrder = _Order.default.createOrder(newOrder);

    _jsonwebtoken.default.verify(req.token, 'secretkey', function (err) {
      if (err) {
        res.json({
          message: message
        });
      } else {
        return res.json({
          status: 'success',
          data: createdOrder
        }).status(201);
      }
    });
  },
  getAllOrder: function getAllOrder(req, res) {
    _jsonwebtoken.default.verify(req.token, 'secretkey', function (err) {
      if (err) {
        res.json({
          message: message
        });
      } else {
        _Order.default.getAllOrder().then(function (Order) {
          return res.json({
            status: 'success',
            data: Order
          }).status(200);
        });
      }
    });
  },
  getOrderById: function getOrderById(req, res) {
    var _ref = [req.params.id],
        id = _ref[0];

    _jsonwebtoken.default.verify(req.token, 'secretkey', function (err) {
      if (err) {
        res.json({
          message: message
        });
      } else {
        _Order.default.getOrderById(id).then(function (Order) {
          return res.json({
            status: 'success',
            data: Order
          }).status(200);
        });
      }
    });
  },
  updateOrder: function updateOrder(req, res) {
    var _ref2 = [req.params.id, req.body],
        id = _ref2[0],
        Order = _ref2[1];

    var updateOrder = _Order.default.updateOrder(id, Order);

    _jsonwebtoken.default.verify(req.token, 'secretkey', function (err) {
      if (err) {
        res.json({
          message: message
        });
      } else {
        return res.json({
          status: 'success',
          data: updateOrder
        }).status(201);
      }
    });
  },
  deleteOrder: function deleteOrder(req, res) {
    var _ref3 = [req.params.id],
        id = _ref3[0];

    var deleteOrder = _Order.default.deleteOrder(id);

    _jsonwebtoken.default.verify(req.token, 'secretkey', function (err) {
      if (err) {
        res.json({
          message: message
        });
      } else {
        return res.json({
          status: 'success',
          data: deleteOrder
        }).status(200);
      }
    });
  }
};
var _default = OrderController;
exports.default = _default;
//# sourceMappingURL=Order.js.map