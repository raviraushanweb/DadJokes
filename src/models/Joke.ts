import mongoose, {Schema, Document} from "mongoose";

interface IJoke extends Document {
    author: string;
    url: string;
    joke: string;
    date: Date;
    viewCount: number;
}

const jokeSchema: Schema = new Schema({
	author: { type: String, required: true },
	url: { type: String, required: true },
	joke: { type: String, required: true },
	date: Date,
	viewCount: { type: Number, default: 0 },
});

export default mongoose.model<IJoke>("Joke", jokeSchema, 'initial_jokes');