import express from 'express';
// body parser to read the data
import bodyParser from 'body-parser';
import verifyToken from './middleware/verifyToken';
import loginRoute from './routes/Login';
import mealRoute from './routes/Meal';
import orderRoute from './routes/Order';
import menuRoute from './routes/Menu';
import RegisterRoute from './routes/Register';

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

export default app;
