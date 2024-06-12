import express from 'express';
import { login, registerCustomer, registerWorker} from '../controllers/userController.js';

const router = express.Router();

//Register Route 

router.post('/w-register', registerWorker);

router.post('/c-register', registerCustomer);

router.post ('/u-login', login)


export default router;
