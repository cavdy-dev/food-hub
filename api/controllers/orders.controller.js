import OrdersService from '../services/orders.service';

// created our meal controller
const OrderController = {
  // Get all orders
  getAllOrders(req, res) {
    const allOrders = OrdersService.getAllOrders();
    return res.json({
      status: 'success',
      data: allOrders,
    }).status(200);
  },

  // Get order by id
  getSingleOrder(req, res) {
    const [id] = [req.params.id];
    const foundOrder = OrdersService.getSingleOrder(id);
    return res.json({
      status: 'success',
      data: foundOrder,
    }).status(200);
  },

  // Add order
  addOrder(req, res) {
    const Order = req.body;
    const newOrder = OrdersService.addToOrder(Order);
    return res.json({
      status: 'success',
      data: newOrder,
    }).status(201);
  },

  // Update order
  updateOrder(req, res) {
    const [id] = [req.params.id];
    const newOrder = req.body;
    const updateOrder = OrdersService.updateOrder(id, newOrder);
    return res.json({
      status: 'success',
      data: updateOrder,
    }).status(201);
  },

  // Delete Order
  deleteOrder(req, res) {
    const [id] = [req.params.id];
    const deleteOrder = OrdersService.deleteOrder(id);
    return res.json({
      status: 'success',
      data: deleteOrder,
    }).status(200);
  },
};

export default OrderController;
