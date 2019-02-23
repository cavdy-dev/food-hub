import Meal from '../models/Meal.model';
import dummyData from '../utils/dummyData';

// created meal service object;
const MealService = {
  // fetching all the data/meals
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

  // adding meal
  addMeal(meal) {
    const mealLength = dummyData.meals.length;

    // checking if the array is empty to avoid undefined errors.
    if (mealLength === undefined || mealLength == 0) {
      meal.id = 1;
      dummyData.meals.push(meal);
    } else {
      const lastId = dummyData.meals[mealLength - 1].id;
      const newId = lastId + 1;
      meal.id = newId;
      dummyData.meals.push(meal);
    }
    return meal;
  },

  // getting meal by id
  getMeal(id) {
    const meal = dummyData.meals.find(meal => meal.id == id);
    return meal || {};
  },

  // updating meal by id
  updateMeal(id, updateMeal) {
    // checking for meal id, deleting and updating the array
    const mealId = dummyData.meals.find(meal => meal.id == id);
    updateMeal.id = mealId.id;
    dummyData.meals.splice(mealId.id - 1, 1, updateMeal);
    return updateMeal;
  },

  // delete meal by id
  deleteMeal(id) {
    // checking for meal id and deleting it from the array
    const meal = dummyData.meals.find(meal => meal.id == id);
    dummyData.meals.splice(meal.id - 1, 1);
    return {};
  },
};

export default MealService;
