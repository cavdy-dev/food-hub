// import jwt from 'jsonwebtoken';
// import OrdersService from '../services/orders.service';

// // created our meal controller
// const OrderController = {
//   // Get all orders
//   getAllOrders(req, res) {
//     const allOrders = OrdersService.getAllOrders();
//     jwt.verify(req.token, 'secretkey', (err) => {
//       if (err) {
//         res.json({
//           message: 'You must be logged in to order',
//         });
//       } else {
//         return res.json({
//           status: 'success',
//           data: allOrders,
//         }).status(200);
//       }
//     });
//   },

//   // Get order by id
//   getSingleOrder(req, res) {
//     const [id] = [req.params.id];
//     const foundOrder = OrdersService.getSingleOrder(id);
//     jwt.verify(req.token, 'secretkey', (err) => {
//       if (err) {
//         res.json({
//           message: 'You must be logged in to order',
//         });
//       } else {
//         return res.json({
//           status: 'success',
//           data: foundOrder,
//         }).status(200);
//       }
//     });
//   },

//   // Add order
//   addOrder(req, res) {
//     const Order = req.body;
//     const newOrder = OrdersService.addToOrder(Order);
//     jwt.verify(req.token, 'secretkey', (err) => {
//       if (err) {
//         res.json({
//           message: 'You must be logged in to order',
//         });
//       } else {
//         return res.json({
//           status: 'success',
//           data: newOrder,
//         }).status(201);
//       }
//     });
//   },

//   // Update order
//   updateOrder(req, res) {
//     const [id] = [req.params.id];
//     const newOrder = req.body;
//     const updateOrder = OrdersService.updateOrder(id, newOrder);
//     jwt.verify(req.token, 'secretkey', (err) => {
//       if (err) {
//         res.json({
//           message: 'You must be logged in to order',
//         });
//       } else {
//         return res.json({
//           status: 'success',
//           data: updateOrder,
//         }).status(201);
//       }
//     });
//   },

//   // Delete Order
//   deleteOrder(req, res) {
//     const [id] = [req.params.id];
//     const deleteOrder = OrdersService.deleteOrder(id);
//     jwt.verify(req.token, 'secretkey', (err) => {
//       if (err) {
//         res.json({
//           message: 'You must be logged in to order',
//         });
//       } else {
//         return res.json({
//           status: 'success',
//           data: deleteOrder,
//         }).status(200);
//       }
//     });
//   },
// };

// export default OrderController;
