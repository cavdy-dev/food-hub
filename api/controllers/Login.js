import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import loginService from '../services/Login';

const LoginController = {
  getLogin(req, res) {
    const user = req.body;
    loginService.searchUser(user).then((users) => {
      if (users === null || users === 'undefined') {
        return res.json({
          status: 'success',
          data: 'Invalid Email',
        }).status(200);
      }

      bcrypt.compare(user.password, users.password, (err, isMatch) => {
        if (!isMatch) {
          return res.json({
            status: 'success',
            data: 'Invalid Password',
          }).status(200);
        }
        jwt.sign({
          users,
        }, 'secretkey', (err, token) => {
          res.cookie('Authorization', `Bearer ${token}`);
          return res.json({
            status: 'success',
            data: users,
            token,
          }).status(200);
        });
      });
    });
  },
};

export default LoginController;
