import Model from '../models';

const Order = Model.Order;

const OrderService = {
  getAllOrder() {
    return Order.findAll({
      attributes: ['id', 'name', 'size', 'price'],
    });
  },

  getOrderById(id) {
    return Order.findByPk(id, {
      attributes: ['id', 'name', 'size', 'price'],
    });
  },

  createOrder(order) {
    Order.create({
      name: order.name,
      size: order.size,
      price: order.price,
    });
    return order;
  },

  updateOrder(id, order) {
    Order.update(order, {
      where: {
        id,
      },
    });
    return order;
  },

  deleteOrder(id) {
    Order.destroy({
      where: {
        id,
      },
    });
    return [];
  },
};

export default OrderService;
