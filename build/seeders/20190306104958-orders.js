"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var now = new Date();
var _default = {
  up: function up(queryInterface) {
    return queryInterface.bulkInsert('Orders', [{
      name: 'Fried Rice',
      size: 'medium',
      price: 700,
      userId: 7,
      createdAt: now,
      updatedAt: now
    }, {
      name: 'Fried Beans',
      size: 'small',
      price: 300,
      userId: 7,
      createdAt: now,
      updatedAt: now
    }, {
      name: 'Fried Egg',
      size: 'large',
      price: 450,
      userId: 8,
      createdAt: now,
      updatedAt: now
    }], {});
  },
  down: function down(queryInterface) {
    return queryInterface.bulkDelete('Orders', null, {});
  }
};
exports.default = _default;
//# sourceMappingURL=20190306104958-orders.js.map