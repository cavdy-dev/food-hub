const now = new Date();
export default {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Orders', [
      {
        name: 'Fried Rice',
        size: 'medium',
        price: 700,
        userId: 7,
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'Fried Beans',
        size: 'small',
        price: 300,
        userId: 7,
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'Fried Egg',
        size: 'large',
        price: 450,
        userId: 8,
        createdAt: now,
        updatedAt: now,
      },
    ], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Orders', null, {});
  },
};
