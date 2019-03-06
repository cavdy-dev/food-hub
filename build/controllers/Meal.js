"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Meal = _interopRequireDefault(require("../services/Meal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MealController = {
  createMeal: function createMeal(req, res) {
    var newMeal = req.body;

    var createdMeal = _Meal.default.createMeal(newMeal);

    return res.json({
      status: 'success',
      data: createdMeal
    }).status(201);
  },
  getAllMeal: function getAllMeal(req, res) {
    _Meal.default.getAllMeal().then(function (meal) {
      return res.json({
        status: 'success',
        data: meal
      }).status(200);
    });
  },
  getMealById: function getMealById(req, res) {
    var _ref = [req.params.id],
        id = _ref[0];

    _Meal.default.getMealById(id).then(function (meal) {
      return res.json({
        status: 'success',
        data: meal
      }).status(200);
    });
  },
  updateMeal: function updateMeal(req, res) {
    var _ref2 = [req.params.id, req.body],
        id = _ref2[0],
        meal = _ref2[1];

    var updateMeal = _Meal.default.updateMeal(id, meal);

    return res.json({
      status: 'success',
      data: updateMeal
    }).status(201);
  },
  deleteMeal: function deleteMeal(req, res) {
    var _ref3 = [req.params.id],
        id = _ref3[0];

    var deleteMeal = _Meal.default.deleteMeal(id);

    return res.json({
      status: 'success',
      data: deleteMeal
    }).status(200);
  }
};
var _default = MealController;
exports.default = _default;
//# sourceMappingURL=Meal.js.map