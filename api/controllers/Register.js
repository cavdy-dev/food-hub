const RegisterService = require('../services/Register');

const RegisterController = {
  createUser(req, res) {
    const newUser = req.body;
    RegisterService.createUser(newUser).then((loggedIn) => {
      return res.json({
        status: 'success',
        data: 'Sign up successful',
      }).status(201);
    });
  },
};

module.exports = RegisterController;
