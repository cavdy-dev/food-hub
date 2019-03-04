import express from 'express';
// body parser to read the data
import bodyParser from 'body-parser';
import loginRoute from './routes/login.route';
import mealsRoute from './routes/meals.route';
import menuRoute from './routes/menu.routes';
import ordersRoute from './routes/orders.route';

// instantiate expressjs
const app = express();
const PORT = process.env.PORT || 5900;

app.use(bodyParser.json());

const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers.authorization;
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.json({
      message: 'You must be logged in to order',
    });
  }
};

// creating the api version route
app.use('/api/login', loginRoute);
app.use('/api/v1/meals', mealsRoute);
app.use('/api/v1/menus', menuRoute);
app.use('/api/v1/orders', verifyToken, ordersRoute);

// listening to our port
app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});

export default app;
