import { Request, Response, NextFunction  } from "express";
import { Joke } from "../../models";

const JokeController = {
    async getSingleJoke(req: Request, res: Response, next: NextFunction) {
        try {
            const count = await Joke.countDocuments();
            const random = Math.floor(Math.random() * count);
            const joke = await Joke.findOne().skip(random);

            if(!joke) {
                return res.status(404).json({
                    message: 'No Joke not found'
                });
            } else {
                joke.viewCount = (joke.viewCount || 0) + 1;
				await joke.save();

                const jokeData = {
                    "author": joke.author,
                    "url": joke.url,
                    "joke": joke.joke,
                    "date": joke.date,
                    "viewCount": joke.viewCount
                }
                res.status(200).json(jokeData);
            }
        } 
        catch (err: unknown) {
            return next(err);
        }
    }
}

export default JokeController;