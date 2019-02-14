import express from 'express';
import OrdersController from '../controllers/orders.controller';

const router = express.Router();

// creating our routes
router.get('/', OrdersController.getAllOrders);
router.post('/', OrdersController.addOrder);
router.get('/:id', OrdersController.getSingleOrder);
router.put('/:id', OrdersController.updateOrder);

export default router;
