"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(sequelize, DataTypes) {
  var Meal = sequelize.define('Meal', {
    name: DataTypes.STRING,
    size: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {});

  Meal.associate = function (models) {// hhhh
  };

  return Meal;
};

exports.default = _default;
//# sourceMappingURL=Meal.js.map