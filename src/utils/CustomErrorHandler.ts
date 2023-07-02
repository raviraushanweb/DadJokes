interface ICustomError {
	status: number;
	message: string;
}

class CustomErrorHandler extends Error implements ICustomError {
	status: number;
	message: string;

	constructor(status: number, msg: string) {
		super();
		this.status = status;
		this.message = msg;
	}

	static alreadyExist(message: string): CustomErrorHandler {
		return new CustomErrorHandler(409, message);
	}

	static wrongCredentials(message = "Username or password is wrong!"): CustomErrorHandler {
		return new CustomErrorHandler(401, message);
	}

	static unAuthorized(message = "unAuthorized"): CustomErrorHandler {
		return new CustomErrorHandler(401, message);
	}

	static notFound(message = "404 Not Found"): CustomErrorHandler {
		return new CustomErrorHandler(404, message);
	}

	static serverError(
		message = "Internal server error"
	): CustomErrorHandler {
		return new CustomErrorHandler(500, message);
	}

	static usernameNotAvailable(
		message = "This username is not available!"
	): CustomErrorHandler {
		return new CustomErrorHandler(409, message);
	}

	static fileUploadingError(
		message = "Something went wrong while uploading images"
	): CustomErrorHandler {
		return new CustomErrorHandler(500, message);
	}

	static usernameTaken(
		message = "This username is taken!"
	): CustomErrorHandler {
		return new CustomErrorHandler(409, message);
	}

	static objectIdNotValid(
		message = "Object id is not valid!"
	): CustomErrorHandler {
		return new CustomErrorHandler(400, message);
	}
}

export default CustomErrorHandler;
