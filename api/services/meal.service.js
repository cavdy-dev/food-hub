import Meal from '../models/Meal.model';
import dummyData from '../utils/dummyData';

const MealService = {
  fetchAllMeals() {
    return dummyData.meals.map((meal) => {
      const newMeal = new Meal();
      newMeal.id = meal.id;
      newMeal.name = meal.name;
      newMeal.size = meal.size;
      newMeal.price = meal.price;
      return newMeal;
    });
  },

  addMeal(meal) {
    const mealLength = dummyData.meals.length;
    const lastId = dummyData.meals[mealLength - 1].id;
    const newId = lastId + 1;
    meal.id = newId;
    dummyData.push(meal);
    return meal;
  },

  getMeal(id) {
    const meal = dummyData.meals.find(meal => meal.id = id);
    return meal || {};
  },
};

export default MealService;
