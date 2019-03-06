"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _Login = _interopRequireDefault(require("../services/Login"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoginController = {
  getLogin: function getLogin(req, res) {
    var user = req.body;

    _Login.default.searchUser(user).then(function (users) {
      if (users === null || users === 'undefined') {
        return res.json({
          status: 'success',
          data: 'Invalid Email'
        }).status(200);
      }

      _bcryptjs.default.compare(user.password, users.password, function (err, isMatch) {
        if (!isMatch) {
          return res.json({
            status: 'success',
            data: 'Invalid Password'
          }).status(200);
        }

        _jsonwebtoken.default.sign({
          users: users
        }, 'secretkey', function (err, token) {
          res.cookie('Authorization', "Bearer ".concat(token));
          return res.json({
            status: 'success',
            data: users,
            token: token
          }).status(200);
        });
      });
    });
  }
};
var _default = LoginController;
exports.default = _default;
//# sourceMappingURL=Login.js.map