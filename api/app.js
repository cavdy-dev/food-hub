import express from 'express';

const app = express();
const PORT = 5500;

app.get('/', (req, res) => res.send('The API is working'));

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});
