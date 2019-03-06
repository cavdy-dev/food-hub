"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _Menu = _interopRequireDefault(require("../controllers/Menu"));

var _verifyToken = _interopRequireDefault(require("../middleware/verifyToken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.get('/', _Menu.default.getAllMenu);
router.get('/:id', _Menu.default.getMenuById);
router.post('/', _verifyToken.default, _Menu.default.createMenu);
router.put('/:id', _verifyToken.default, _Menu.default.updateMenu);
router.delete('/:id', _verifyToken.default, _Menu.default.deleteMenu);
var _default = router;
exports.default = _default;
//# sourceMappingURL=Menu.js.map