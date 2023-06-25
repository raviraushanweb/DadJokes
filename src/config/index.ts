import dotenv from 'dotenv';

dotenv.config();

export const {
	APP_PORT,
	APP_HOST,
	MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_CONNECT_URL
} = process.env;