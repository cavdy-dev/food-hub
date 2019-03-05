const bcrypt = require('bcryptjs');
const Model = require('../models');

const User = Model.User;

const UserService = {
  createUser(user) {
    bcrypt.genSalt(10, (error, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) throw err;
        user.password = hash;
        return User.create({
          email: user.email,
          password: user.password,
        });
      });
    });
  },
};

module.exports = UserService;
