const express = require('express');
const MealController = require('../controllers/Meal');

const router = express.Router();

router.get('/', MealController.getAllMeal);
router.get('/:id', MealController.getMealById);
router.post('/', MealController.createMeal);
router.put('/:id', MealController.updateMeal);
router.delete('/:id', MealController.deleteMeal);

module.exports = router;
