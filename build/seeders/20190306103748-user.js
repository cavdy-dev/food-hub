"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var now = new Date();

var salt = _bcryptjs.default.genSaltSync(10);

var hash = _bcryptjs.default.hashSync('12345', salt);

var _default = {
  up: function up(queryInterface) {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@mail.com',
      password: hash,
      isadmin: true,
      createdAt: now,
      updatedAt: now
    }, {
      email: 'user@mail.com',
      password: hash,
      isadmin: false,
      createdAt: now,
      updatedAt: now
    }, {
      email: 'admin2@mail.com',
      password: hash,
      isadmin: true,
      createdAt: now,
      updatedAt: now
    }, {
      email: 'user2@mail.com',
      password: hash,
      isadmin: true,
      createdAt: now,
      updatedAt: now
    }], {});
  },
  down: function down(queryInterface) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
exports.default = _default;
//# sourceMappingURL=20190306103748-user.js.map