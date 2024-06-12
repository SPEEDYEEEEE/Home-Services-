import express from 'express';
import { getServicesData, saveServicesToDB } from '../controllers/servicesController.js';

const router = express.Router();

router.post("/create-services", saveServicesToDB);
router.get("/get-services", getServicesData)


export default router;