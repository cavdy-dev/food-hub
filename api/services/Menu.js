import Model from '../models';

const Menu = Model.Menu;

const MenuService = {
  getAllMenu() {
    return Menu.findAll({
      attributes: ['id', 'name', 'size', 'price'],
    });
  },

  getMenuById(id) {
    return Menu.findByPk(id, {
      attributes: ['id', 'name', 'size', 'price'],
    });
  },

  createMenu(menu) {
    Menu.create({
      name: menu.name,
      size: menu.size,
      price: menu.price,
    });
    return menu;
  },

  updateMenu(id, menu) {
    Menu.update(menu, {
      where: {
        id,
      },
    });
    return menu;
  },

  deleteMenu(id) {
    Menu.destroy({
      where: {
        id,
      },
    });
    return [];
  },
};

export default MenuService;
