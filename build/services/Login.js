"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = _interopRequireDefault(require("../models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = _models.default.User;
var UserService = {
  searchUser: function searchUser(login) {
    return User.findOne({
      attributes: ['email', 'password'],
      where: {
        email: login.email
      }
    });
  }
};
var _default = UserService;
exports.default = _default;
//# sourceMappingURL=Login.js.map