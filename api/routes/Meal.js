import express from 'express';
import MealController from '../controllers/Meal';
import verifyToken from '../middleware/verifyToken';

const router = express.Router();

router.get('/', MealController.getAllMeal);
router.get('/:id', MealController.getMealById);
router.post('/', verifyToken, MealController.createMeal);
router.put('/:id', verifyToken, MealController.updateMeal);
router.delete('/:id', verifyToken, MealController.deleteMeal);

export default router;
