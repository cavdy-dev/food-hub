import RegisterService from '../services/Register';

const RegisterController = {
  createUser(req, res) {
    const newUser = req.body;
    RegisterService.createUser(newUser).then(() => {
      return res.json({
        status: 'success',
        data: 'Sign up successful',
      }).status(201);
    });
  },
};

export default RegisterController;
