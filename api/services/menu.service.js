import MealModel from '../models/Meal.model';
import menuData from '../utils/menuData';


const MenuService = {

  // fetching all the data/menus
  getMenuOfDay() {
    return menuData.menus.map((menu) => {
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
    const menuLength = menuData.menus.length;

    // checking if the array is empty to avoid undefined errors.
    if (menuLength === undefined || menuLength == 0) {
      menu.id = 1;
      menuData.menus.push(menu);
    } else {
      const lastId = menuData.menus[menuLength - 1].id;
      const newId = lastId + 1;
      menu.id = newId;
      menuData.menus.push(menu);
    }
    return menu;
  },

  // updating menu
  updateMenuOfDay(id, updateMenu) {
    // checking for menu id, deleting and updating the array
    const MenuId = menuData.menus.find(menu => menu.id == id);
    updateMenu.id = MenuId.id;
    menuData.menus.splice(MenuId.id - 1, 1, updateMenu);
    return updateMenu;
  },

  // delete menu by id
  deleteMenuOfDay(id) {
    // checking for menu id and deleting it from the array
    const menu = menuData.menus.find(menu => menu.id == id);
    menuData.menus.splice(menu.id - 1, 1);
    return {};
  },

};

export default MenuService;