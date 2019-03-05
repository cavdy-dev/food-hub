const Model = require('../models');

const Meal = Model.Meal;

const MealService = {
  getAllMeal() {
    return Meal.findAll({
      attributes: ['id', 'name', 'size', 'price'],
    });
  },

  getMealById(id) {
    return Meal.findByPk(id, {
      attributes: ['id', 'name', 'size', 'price'],
    });
  },

  createMeal(meal) {
    Meal.create({
      name: meal.name,
      size: meal.size,
      price: meal.price,
    });
    return meal;
  },

  updateMeal(id, meal) {
    Meal.update(meal, {
      where: { id },
    });
    return meal;
  },

  deleteMeal(id) {
    Meal.destroy({
      where: {
        id,
      },
    });
    return [];
  },
};

module.exports = MealService;
