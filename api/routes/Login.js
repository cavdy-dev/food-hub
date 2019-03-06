import express from 'express';
import loginController from '../controllers/Login';

const router = express.Router();

router.post('/', loginController.getLogin);
export default router;
