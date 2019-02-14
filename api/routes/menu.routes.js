import express from 'express';
import MenuController from '../controllers/menu.controller';

const router = express.Router();

// creating our routes
router.get('/', MenuController.getMenuOfDay);
router.post('/', MenuController.addMenuOfDay);

export default router;
