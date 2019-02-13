import express from 'express';
import mealsRoute from './routes/meals.route';

const app = express();
const PORT = 5600;

app.use('/api/v1/meals', mealsRoute);

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});
