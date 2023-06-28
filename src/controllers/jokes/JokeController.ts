import { Request, Response, NextFunction  } from "express";

const JokeController = {
    async getSingleJoke(req: Request, res: Response, next: NextFunction) {
        try {
            res.status(200).json("User has been followed");
        } 
        catch (err: unknown) {
            if(err instanceof Error) {
            console.log(err.message);
            } else {
                console.log(err);
            }
        }
    }
}

export default JokeController;