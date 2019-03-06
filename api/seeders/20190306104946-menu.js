const now = new Date();
module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Menus', [
      {
        name: 'Rice',
        size: 'medium',
        price: 700,
        createdAt: now,
        updatedAt: now,
      }, {
        name: 'Beans',
        size: 'small',
        price: 300,
        createdAt: now,
        updatedAt: now,
      }, {
        name: 'Egg',
        size: 'large',
        price: 450,
        createdAt: now,
        updatedAt: now,
      },
    ], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Menus', null, {});
  },
};
