import MealModel from '../models/Meal.model';
import dummyData from '../utils/dummyData';


const MenuService = {

  // fetching all the data/meals
  getMenuOfDay() {
    return dummyData.meals.map((meal) => {
      const newMeal = new MealModel();
      newMeal.id = meal.id;
      newMeal.name = meal.name;
      newMeal.size = meal.size;
      newMeal.price = meal.price;
      return newMeal;
    });
  },

  // adding meal of the day
  addMenuOfDay(meal) {
    // checking for meal id, deleting and updating the array
    meal.id = 1;
    dummyData.meals.splice(0, 1, meal);
    return meal;
  },

};

export default MenuService;
