"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _models = _interopRequireDefault(require("../models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = _models.default.User;
var UserService = {
  createUser: function createUser(user) {
    _bcryptjs.default.genSalt(10, function (error, salt) {
      _bcryptjs.default.hash(user.password, salt, function (err, hash) {
        if (err) throw err;
        user.password = hash;
        return User.create({
          email: user.email,
          password: user.password
        });
      });
    });
  }
};
var _default = UserService;
exports.default = _default;
//# sourceMappingURL=Register.js.map