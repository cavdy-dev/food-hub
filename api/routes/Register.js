import express from 'express';
import RegisterController from '../controllers/Register';

const router = express.Router();
router.post('/', RegisterController.createUser);
export default router;
