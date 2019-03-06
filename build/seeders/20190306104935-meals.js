"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var now = new Date();
var _default = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Meals', [{
      name: 'Stew',
      size: 'medium',
      price: 700,
      createdAt: now,
      updatedAt: now
    }, {
      name: 'Soup',
      size: 'small',
      price: 300,
      createdAt: now,
      updatedAt: now
    }, {
      name: 'Fufu',
      size: 'large',
      price: 450,
      createdAt: now,
      updatedAt: now
    }], {});
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Meals', null, {});
  }
};
exports.default = _default;
//# sourceMappingURL=20190306104935-meals.js.map