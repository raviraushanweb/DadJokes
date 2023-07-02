import express from 'express';
import mongoose from 'mongoose';
import { APP_PORT, APP_HOST, MONGO_CONNECT_URL } from './config';
import router from './routes';
import errorHandler from './middlewares/errorHandler';

const app = express();

// connect to MongoDB
async function mongoConnect() {
  try {
    if(MONGO_CONNECT_URL) {
        await mongoose.connect(MONGO_CONNECT_URL);
    }
  } catch (err: unknown) {
    if(err instanceof Error) {
      console.error('Mongo connection error: ', err.message);
    } else {
      console.error('Mongo connection error: ', err);
    }
  }
}

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET home page
app.get("/", (req, res) => {
  res.send("Welcome to Dad's Joke!");
});

app.use('/api/v1', router);
app.use(errorHandler);

app.listen(APP_PORT, async () => {
    console.log(`App listening on port ${APP_PORT}`);
    await mongoConnect();
})