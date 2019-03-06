"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = _interopRequireDefault(require("../models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Menu = _models.default.Menu;
var MenuService = {
  getAllMenu: function getAllMenu() {
    return Menu.findAll({
      attributes: ['id', 'name', 'size', 'price']
    });
  },
  getMenuById: function getMenuById(id) {
    return Menu.findByPk(id, {
      attributes: ['id', 'name', 'size', 'price']
    });
  },
  createMenu: function createMenu(menu) {
    Menu.create({
      name: menu.name,
      size: menu.size,
      price: menu.price
    });
    return menu;
  },
  updateMenu: function updateMenu(id, menu) {
    Menu.update(menu, {
      where: {
        id: id
      }
    });
    return menu;
  },
  deleteMenu: function deleteMenu(id) {
    Menu.destroy({
      where: {
        id: id
      }
    });
    return [];
  }
};
var _default = MenuService;
exports.default = _default;
//# sourceMappingURL=Menu.js.map