"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(req, res, next) {
  var bearerHeader = req.headers.authorization;

  if (typeof bearerHeader !== 'undefined') {
    var bearer = bearerHeader.split(' ');
    var bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.json({
      message: 'You must be logged in to order'
    });
  }
};

exports.default = _default;
//# sourceMappingURL=verifyToken.js.map