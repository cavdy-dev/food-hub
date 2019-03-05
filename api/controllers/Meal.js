const MealService = require('../services/Meal');

const MealController = {
  createMeal(req, res) {
    const newMeal = req.body;
    const createdMeal = MealService.createMeal(newMeal);
    return res.json({
      status: 'success',
      data: createdMeal,
    }).status(201);
  },

  getAllMeal(req, res) {
    MealService.getAllMeal().then((meal) => {
      return res.json({
        status: 'success',
        data: meal,
      }).status(200);
    });
  },

  getMealById(req, res) {
    const [id] = [req.params.id];
    MealService.getMealById(id).then((meal) => {
      return res.json({
        status: 'success',
        data: meal,
      }).status(200);
    });
  },

  updateMeal(req, res) {
    const [id, meal] = [req.params.id, req.body];
    const updateMeal = MealService.updateMeal(id, meal);
    return res.json({
      status: 'success',
      data: updateMeal,
    }).status(201);
  },

  deleteMeal(req, res) {
    const [id] = [req.params.id];
    const deleteMeal = MealService.deleteMeal(id);
    return res.json({
      status: 'success',
      data: deleteMeal,
    }).status(200);
  },
};

module.exports = MealController;
