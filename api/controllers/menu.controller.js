import MenuService from '../services/menu.service';

// created our menu controller
const MenuController = {
  // get menu of the day
  getMenuOfDay(req, res) {
    const menu = MenuService.getMenuOfDay();
    return res.json({
      status: 'success',
      data: menu,
    }).status(200);
  },

  // Add menu of the day
  addMenuOfDay(req, res) {
    const newMenu = req.body;
    const updatedMenu = MenuService.addMenuOfDay(newMenu);
    return res.json({
      status: 'success',
      data: updatedMenu,
    }).status(201);
  },

};

export default MenuController;
