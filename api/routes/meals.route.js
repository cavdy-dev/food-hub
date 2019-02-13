import express from 'express';
import MealService from '../services/meal.service';

const mealService = new MealService();

const router = express.Router();
router.get('/', (req, res) => {
  res.status(200).send(mealService.getAll());
});

router.get('/:id', (req, res) => {
  res.status(200).send(mealService.get(req.params.id));
});

export default router;
