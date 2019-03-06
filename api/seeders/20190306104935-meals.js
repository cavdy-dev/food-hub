const now = new Date();
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Meals', [
      {
        name: 'Stew',
        size: 'medium',
        price: 700,
        createdAt: now,
        updatedAt: now,
      }, {
        name: 'Soup',
        size: 'small',
        price: 300,
        createdAt: now,
        updatedAt: now,
      }, {
        name: 'Fufu',
        size: 'large',
        price: 450,
        createdAt: now,
        updatedAt: now,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Meals', null, {});
  },
};
