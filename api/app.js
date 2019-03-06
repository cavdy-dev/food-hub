const express = require('express');
// body parser to read the data
const bodyParser = require('body-parser');
const loginRoute = require('./routes/Login');
const mealRoute = require('./routes/Meal');
// import menuRoute from './routes/menu.routes';
const orderRoute = require('./routes/Order');
const menuRoute = require('./routes/Menu');
const RegisterRoute = require('./routes/Register');
const verifyToken = require('./middleware/verifyToken');

// instantiate expressjs
const app = express();
const PORT = process.env.PORT || 5900;

app.use(bodyParser.json());

// creating the api version route
app.use('/api/login', loginRoute);
app.use('/api/v1/meals', mealRoute);
app.use('/api/v1/menus', menuRoute);
app.use('/api/v1/orders', verifyToken, orderRoute);
app.use('/api/register', RegisterRoute);

// listening to our port
app.listen(PORT, () => {
  console.log('server running on port');
});

// export default app;
