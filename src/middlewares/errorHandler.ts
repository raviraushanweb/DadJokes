import { Request, Response, NextFunction } from "express";
import { DEBUG_MODE } from "../config";
import { ValidationError } from "joi";
import CustomErrorHandler from "../utils/CustomErrorHandler";

const errorHandler = (
	err: Error | ValidationError | CustomErrorHandler,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	let statusCode = 500;
	let data: { message: string; originalError?: string } = {
		message: "Internal server error",
		...(DEBUG_MODE === "true" && { originalError: err.message }),
	};

	if (err instanceof ValidationError) {
		statusCode = 422;
		data = {
			message: err.message,
		};
	}

	if (err instanceof CustomErrorHandler) {
		statusCode = err.status;
		data = {
			message: err.message,
		};
	}

	return res.status(statusCode).json(data);
};

export default errorHandler;
