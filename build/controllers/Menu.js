"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Menu = _interopRequireDefault(require("../services/Menu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuController = {
  createMenu: function createMenu(req, res) {
    var newMenu = req.body;

    var createdMenu = _Menu.default.createMenu(newMenu);

    return res.json({
      status: 'success',
      data: createdMenu
    }).status(201);
  },
  getAllMenu: function getAllMenu(req, res) {
    _Menu.default.getAllMenu().then(function (Menu) {
      return res.json({
        status: 'success',
        data: Menu
      }).status(200);
    });
  },
  getMenuById: function getMenuById(req, res) {
    var _ref = [req.params.id],
        id = _ref[0];

    _Menu.default.getMenuById(id).then(function (Menu) {
      return res.json({
        status: 'success',
        data: Menu
      }).status(200);
    });
  },
  updateMenu: function updateMenu(req, res) {
    var _ref2 = [req.params.id, req.body],
        id = _ref2[0],
        Menu = _ref2[1];

    var updateMenu = _Menu.default.updateMenu(id, Menu);

    return res.json({
      status: 'success',
      data: updateMenu
    }).status(201);
  },
  deleteMenu: function deleteMenu(req, res) {
    var _ref3 = [req.params.id],
        id = _ref3[0];

    var deleteMenu = _Menu.default.deleteMenu(id);

    return res.json({
      status: 'success',
      data: deleteMenu
    }).status(200);
  }
};
var _default = MenuController;
exports.default = _default;
//# sourceMappingURL=Menu.js.map