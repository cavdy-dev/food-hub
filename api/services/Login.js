const Model = require('../models');

const User = Model.User;

const UserService = {

  searchUser(login) {
    return User.findOne({
      attributes: ['email', 'password'],
      where: {
        email: login.email,
      },
    });
  },
};

module.exports = UserService;
