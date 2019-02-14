import express from 'express';
// body parser to read the data
import bodyParser from 'body-parser';
import mealsRoute from './routes/meals.route';
import menuRoute from './routes/menu.routes';

// instantiate expressjs
const app = express();
const PORT = 5800;

app.use(bodyParser.json());

// creating the api version route
app.use('/api/v1/meals', mealsRoute);
app.use('/api/v1/menus', menuRoute);

// listening to our port
app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});
