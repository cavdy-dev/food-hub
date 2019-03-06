"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = _interopRequireDefault(require("../models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Meal = _models.default.Meal;
var MealService = {
  getAllMeal: function getAllMeal() {
    return Meal.findAll({
      attributes: ['id', 'name', 'size', 'price']
    });
  },
  getMealById: function getMealById(id) {
    return Meal.findByPk(id, {
      attributes: ['id', 'name', 'size', 'price']
    });
  },
  createMeal: function createMeal(meal) {
    Meal.create({
      name: meal.name,
      size: meal.size,
      price: meal.price
    });
    return meal;
  },
  updateMeal: function updateMeal(id, meal) {
    Meal.update(meal, {
      where: {
        id: id
      }
    });
    return meal;
  },
  deleteMeal: function deleteMeal(id) {
    Meal.destroy({
      where: {
        id: id
      }
    });
    return [];
  }
};
var _default = MealService;
exports.default = _default;
//# sourceMappingURL=Meal.js.map