import express from 'express';
import MenuController from '../controllers/Menu';
import verifyToken from '../middleware/verifyToken';

const router = express.Router();

router.get('/', MenuController.getAllMenu);
router.get('/:id', MenuController.getMenuById);
router.post('/', verifyToken, MenuController.createMenu);
router.put('/:id', verifyToken, MenuController.updateMenu);
router.delete('/:id', verifyToken, MenuController.deleteMenu);

export default router;
