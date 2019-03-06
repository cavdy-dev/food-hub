"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(sequelize, DataTypes) {
  var Menu = sequelize.define('Menu', {
    name: DataTypes.STRING,
    size: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {});

  Menu.associate = function (models) {// associations can be defined here
  };

  return Menu;
};

exports.default = _default;
//# sourceMappingURL=Menu.js.map