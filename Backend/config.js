import dotenv from 'dotenv';
dotenv.config();

export const Port = process.env.PORT;
export const mongoUrl = process.env.MONGO_URL;
