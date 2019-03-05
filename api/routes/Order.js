const express = require('express');
const OrderController = require('../controllers/Order');

const router = express.Router();

router.get('/', OrderController.getAllOrder);
router.get('/:id', OrderController.getOrderById);
router.post('/', OrderController.createOrder);
router.put('/:id', OrderController.updateOrder);
router.delete('/:id', OrderController.deleteOrder);

module.exports = router;
