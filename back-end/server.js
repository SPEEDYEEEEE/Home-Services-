import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import * as dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import workerRoutes from './routes/workerRoutes.js';
import servicesRoute from './routes/servicesRoute.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//Express-App
const app = express();

//DotENV Config
dotenv.config();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
// app.use(express.static('/images'))
app.use('/images', express.static(join(__dirname, 'images')));
app.use('/api/users', userRoutes);
app.use('/api/workers', workerRoutes);
app.use('/api/services', servicesRoute)


//Port Configuration
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

//MongoDB Connection
const MONGODB = process.env.MONGO_URI;
mongoose.connect(MONGODB)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));