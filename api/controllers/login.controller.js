import jwt from 'jsonwebtoken';
import loginService from '../services/login.service';

const LoginController = {
  getLogin(req, res) {
    const user = req.body;
    const loggedIn = loginService.getUser(user);
    jwt.sign({ loggedIn }, 'secretkey', (err, token) => {
      return res.json({
        status: 'success',
        data: loggedIn,
        token,
      }).status(201);
    });
  },
};

export default LoginController;
