import express from 'express';
import MealController from '../controllers/meal.controller';

const router = express.Router();

router.get('/', MealController.fetchAllMeals);
router.post('/', MealController.addMeal);
router.get('/:id', MealController.getSingleMeal);

export default router;
