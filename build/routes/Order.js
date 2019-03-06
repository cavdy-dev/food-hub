"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _Order = _interopRequireDefault(require("../controllers/Order"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.get('/', _Order.default.getAllOrder);
router.get('/:id', _Order.default.getOrderById);
router.post('/', _Order.default.createOrder);
router.put('/:id', _Order.default.updateOrder);
router.delete('/:id', _Order.default.deleteOrder);
var _default = router;
exports.default = _default;
//# sourceMappingURL=Order.js.map