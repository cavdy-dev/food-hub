import MealService from '../services/meal.service';

// created our meal controller
const MealController = {
  // get/fetch all meals
  fetchAllMeals(req, res) {
    const allMeals = MealService.fetchAllMeals();
    return res.json({
      status: 'success',
      data: allMeals,
    }).status(200);
  },

  // Add meal
  addMeal(req, res) {
    const newMeal = req.body;
    const createdMeal = MealService.addMeal(newMeal);
    return res.json({
      status: 'success',
      data: createdMeal,
    }).status(201);
  },

  // Get meal by id
  getSingleMeal(req, res) {
    const [id] = [req.params.id];
    const foundMeal = MealService.getMeal(id);
    return res.json({
      status: 'success',
      data: foundMeal,
    }).status(200);
  },

  // Update Meal
  updateMeal(req, res) {
    const [id] = [req.params.id];
    const newMeal = req.body;
    const updatedMeal = MealService.updateMeal(id, newMeal);
    return res.json({
      status: 'success',
      data: updatedMeal,
    }).status(201);
  },

  // Delete Meal
  deleteMeal(req, res) {
    const [id] = [req.params.id];
    const deleteMeal = MealService.deleteMeal(id);
    return res.json({
      status: 'success',
      data: deleteMeal,
    }).status(200);
  },
};

export default MealController;
