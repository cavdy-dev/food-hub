import MealModel from '../models/Meal.model';
import orderData from '../utils/orderData';

const OrdersService = {

  // fetching all the orders
  getAllOrders() {
    return orderData.meals.map((order) => {
      const orders = new MealModel();
      orders.id = order.id;
      orders.name = order.name;
      orders.size = order.size;
      orders.price = order.price;
      return orders;
    });
  },

  // getting order by id
  getSingleOrder(id) {
    const orders = orderData.meals.find(order => order.id == id);
    return orders || {};
  },

  // adding to order list
  addToOrder(order) {
    const orderLength = orderData.meals.length;

    // checking if the array is empty to avoid undefined errors.
    if (orderLength === undefined || orderLength == 0) {
      order.id = 1;
      orderData.meals.push(order);
    } else {
      const lastId = orderData.meals[orderLength - 1].id;
      const newId = lastId + 1;
      order.id = newId;
      orderData.meals.push(order);
    }
    return order;
  },

  // updating order
  updateOrder(id, updateOrder) {
    // checking for meal id, deleting and updating the array
    const orderId = orderData.meals.find(order => order.id == id);
    updateOrder.id = orderId.id;
    orderData.meals.splice(orderId.id - 1, 1, updateOrder);
    return updateOrder;
  },

  // delete order by id
  deleteOrder(id) {
    // checking for order id and deleting it from the array
    const order = orderData.meals.find(order => order.id == id);
    orderData.meals.splice(order.id - 1, 1);
    return {};
  },

};

export default OrdersService;