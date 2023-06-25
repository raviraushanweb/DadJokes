import express from 'express';
import { APP_PORT, APP_HOST } from './config';

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET home page
app.get("/", (req, res) => {
  res.send("Welcome to Dad's Joke!");
});

app.listen(APP_PORT, () => {
    console.log(`App listening on port ${APP_PORT}`);
})