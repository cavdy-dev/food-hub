const bcrypt = require('bcryptjs');

const now = new Date();
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync('12345', salt);

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@mail.com',
      password: hash,
      isadmin: true,
      createdAt: now,
      updatedAt: now,
    }, {
      email: 'user@mail.com',
      password: hash,
      isadmin: false,
      createdAt: now,
      updatedAt: now,
    }, {
      email: 'admin2@mail.com',
      password: hash,
      isadmin: true,
      createdAt: now,
      updatedAt: now,
    }, {
      email: 'user2@mail.com',
      password: hash,
      isadmin: true,
      createdAt: now,
      updatedAt: now,
    },
    ], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
