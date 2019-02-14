import MenuService from '../services/menu.service';

// created our menu controller
const MenuController = {
  getMenuOfDay(req, res) {
    const menu = MenuService.getMenuOfDay();
    return res.json({
      status: 'success',
      data: menu,
    }).status(200);
  },

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
