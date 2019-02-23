import express from 'express';
import MealController from '../controllers/meal.controller';

const router = express.Router();

// creating our routes
router.get('/', MealController.fetchAllMeals);
router.post('/', MealController.addMeal);
router.get('/:id', MealController.getSingleMeal);
router.put('/:id', MealController.updateMeal);
router.delete('/:id', MealController.deleteMeal);

export default router;
