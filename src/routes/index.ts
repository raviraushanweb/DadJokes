import express from 'express';
import { JokeController } from '../controllers';

const router = express.Router();

router.get('/getsinglejoke', JokeController.getSingleJoke)

export default router;