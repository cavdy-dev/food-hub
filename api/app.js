import express from 'express';
import bodyParser from 'body-parser';
import mealsRoute from './routes/meals.route';

const app = express();
const PORT = 5700;

app.use(bodyParser.json());

app.use('/api/v1/meals', mealsRoute);

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});
