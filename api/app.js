import express from 'express';
// body parser to read the data
import bodyParser from 'body-parser';
import mealsRoute from './routes/meals.route';
import menuRoute from './routes/menu.routes';
import ordersRoute from './routes/orders.route';

// instantiate expressjs
const app = express();
const PORT = 5900;

app.use(bodyParser.json());

// creating the api version route
app.use('/api/v1/meals', mealsRoute);
app.use('/api/v1/menus', menuRoute);
app.use('/api/v1/orders', ordersRoute);

// listening to our port
app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});
