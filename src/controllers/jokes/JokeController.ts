import { Request, Response, NextFunction  } from "express";
import { Joke } from "../../models";

const JokeController = {
	async getSingleJoke(req: Request, res: Response, next: NextFunction) {
		try {
			const count = await Joke.countDocuments();
			const random = Math.floor(Math.random() * count);
			const joke = await Joke.findOne().skip(random);

			if (!joke) {
				return res.status(404).json({
					message: "No Joke not found",
				});
			} else {
				joke.viewCount = (joke.viewCount || 0) + 1;
				await joke.save();

				const jokeData = {
					author: joke.author,
					url: joke.url,
					joke: joke.joke,
					date: joke.date,
					viewCount: joke.viewCount,
				};
				res.status(200).json(jokeData);
			}
		} catch (err: unknown) {
			return next(err);
		}
	},

	async getMultipleJoke(req: Request, res: Response, next: NextFunction) {
		try {
			const limit = parseInt(req.params.limit, 10);

			if (isNaN(limit) || limit <= 0 || limit > 10) {
				return res.status(400).json({
					message:
						"Invalid limit value. Limit must be a number between 1 and 10.",
				});
			}

			const count = await Joke.countDocuments();
			const random = Math.floor(Math.random() * count);
			const firstJoke = await Joke.findOne().skip(random);

			if (!firstJoke) {
				return res.status(404).json({
					message: "No jokes found",
				});
			}

			const jokes = await Joke.find()
				.skip(random + 1)
				.limit(limit - 1);
			jokes.unshift(firstJoke);

			jokes.forEach(async (joke) => {
				joke.viewCount = (joke.viewCount || 0) + 1;
				await joke.save();
			});

			const jokesData = jokes.map((joke) => ({
				author: joke.author,
				url: joke.url,
				joke: joke.joke,
				date: joke.date,
				viewCount: joke.viewCount,
			}));

			res.status(200).json(jokesData);
		} catch (err: unknown) {
			return next(err);
		}
	},
};

export default JokeController;