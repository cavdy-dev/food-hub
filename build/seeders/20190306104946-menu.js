"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var now = new Date();
var _default = {
  up: function up(queryInterface) {
    return queryInterface.bulkInsert('Menus', [{
      name: 'Rice',
      size: 'medium',
      price: 700,
      createdAt: now,
      updatedAt: now
    }, {
      name: 'Beans',
      size: 'small',
      price: 300,
      createdAt: now,
      updatedAt: now
    }, {
      name: 'Egg',
      size: 'large',
      price: 450,
      createdAt: now,
      updatedAt: now
    }], {});
  },
  down: function down(queryInterface) {
    return queryInterface.bulkDelete('Menus', null, {});
  }
};
exports.default = _default;
//# sourceMappingURL=20190306104946-menu.js.map