const express = require('express');
const MealController = require('../controllers/Meal');
const verifyToken = require('../middleware/verifyToken');

const router = express.Router();

router.get('/', MealController.getAllMeal);
router.get('/:id', MealController.getMealById);
router.post('/', verifyToken, MealController.createMeal);
router.put('/:id', verifyToken, MealController.updateMeal);
router.delete('/:id', verifyToken, MealController.deleteMeal);

module.exports = router;
