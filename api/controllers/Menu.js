import MenuService from '../services/Menu';

const MenuController = {
  createMenu(req, res) {
    const newMenu = req.body;
    const createdMenu = MenuService.createMenu(newMenu);
    return res.json({
      status: 'success',
      data: createdMenu,
    }).status(201);
  },

  getAllMenu(req, res) {
    MenuService.getAllMenu().then((Menu) => {
      return res.json({
        status: 'success',
        data: Menu,
      }).status(200);
    });
  },

  getMenuById(req, res) {
    const [id] = [req.params.id];
    MenuService.getMenuById(id).then((Menu) => {
      return res.json({
        status: 'success',
        data: Menu,
      }).status(200);
    });
  },

  updateMenu(req, res) {
    const [id, Menu] = [req.params.id, req.body];
    const updateMenu = MenuService.updateMenu(id, Menu);
    return res.json({
      status: 'success',
      data: updateMenu,
    }).status(201);
  },

  deleteMenu(req, res) {
    const [id] = [req.params.id];
    const deleteMenu = MenuService.deleteMenu(id);
    return res.json({
      status: 'success',
      data: deleteMenu,
    }).status(200);
  },
};

export default MenuController;
