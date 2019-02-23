import MealModel from '../models/Meal.model';
import dummyData from '../utils/dummyData';


const MenuService = {

  // fetching all the data/meals
  getMenuOfDay() {
    return dummyData.meals.map((menu) => {
      const newMenu = new MealModel();
      newMenu.id = menu.id;
      newMenu.name = menu.name;
      newMenu.size = menu.size;
      newMenu.price = menu.price;
      return newMenu;
    });
  },

  // adding meal of the day
  addMenuOfDay(menu) {
    menu.id = 1;
    dummyData.meals.splice(0, 1, menu);
    return menu;
  },

};

export default MenuService;
