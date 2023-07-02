import express from 'express';
import { JokeController } from '../controllers';

const router = express.Router();

router.get('/getajoke', JokeController.getSingleJoke);
router.get('/getmultiplejoke/:limit', JokeController.getMultipleJoke);

export default router;