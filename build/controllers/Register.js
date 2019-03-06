"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Register = _interopRequireDefault(require("../services/Register"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RegisterController = {
  createUser: function createUser(req, res) {
    var newUser = req.body;

    _Register.default.createUser(newUser).then(function () {
      return res.json({
        status: 'success',
        data: 'Sign up successful'
      }).status(201);
    });
  }
};
var _default = RegisterController;
exports.default = _default;
//# sourceMappingURL=Register.js.map