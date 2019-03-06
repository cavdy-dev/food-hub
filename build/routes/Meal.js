"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _Meal = _interopRequireDefault(require("../controllers/Meal"));

var _verifyToken = _interopRequireDefault(require("../middleware/verifyToken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.get('/', _Meal.default.getAllMeal);
router.get('/:id', _Meal.default.getMealById);
router.post('/', _verifyToken.default, _Meal.default.createMeal);
router.put('/:id', _verifyToken.default, _Meal.default.updateMeal);
router.delete('/:id', _verifyToken.default, _Meal.default.deleteMeal);
var _default = router;
exports.default = _default;
//# sourceMappingURL=Meal.js.map