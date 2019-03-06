"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: false
  }, {});

  User.associate = function (models) {
    User.hasMany(models.Order);
  };

  return User;
};

exports.default = _default;
//# sourceMappingURL=User.js.map