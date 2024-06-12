import express from 'express';
import { workerList } from '../controllers/userController.js';

const router = express.Router();

router.post('/serviceLink', workerList);

export default router;