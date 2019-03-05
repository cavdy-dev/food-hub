const OrderService = require('../services/Order');

const OrderController = {
  createOrder(req, res) {
    const newOrder = req.body;
    const createdOrder = OrderService.createOrder(newOrder);
    return res.json({
      status: 'success',
      data: createdOrder,
    }).status(201);
  },

  getAllOrder(req, res) {
    OrderService.getAllOrder().then((Order) => {
      return res.json({
        status: 'success',
        data: Order,
      }).status(200);
    });
  },

  getOrderById(req, res) {
    const [id] = [req.params.id];
    OrderService.getOrderById(id).then((Order) => {
      return res.json({
        status: 'success',
        data: Order,
      }).status(200);
    });
  },

  updateOrder(req, res) {
    const [id, Order] = [req.params.id, req.body];
    const updateOrder = OrderService.updateOrder(id, Order);
    return res.json({
      status: 'success',
      data: updateOrder,
    }).status(201);
  },

  deleteOrder(req, res) {
    const [id] = [req.params.id];
    const deleteOrder = OrderService.deleteOrder(id);
    return res.json({
      status: 'success',
      data: deleteOrder,
    }).status(200);
  },
};

module.exports = OrderController;
