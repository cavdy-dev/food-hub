import express from 'express';
// body parser to read the data
import bodyParser from 'body-parser';
import exphbs from 'express-handlebars';
import verifyToken from './middleware/verifyToken';
import loginRoute from './routes/Login';
import mealRoute from './routes/Meal';
import orderRoute from './routes/Order';
import menuRoute from './routes/Menu';
import RegisterRoute from './routes/Register';

// instantiate expressjs
const app = express();
const PORT = process.env.PORT || 5900;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('index');
});

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
