// import MenuService from '../services/menu.service';

// // created our menu controller
// const MenuController = {
//   // get menu of the day
//   getMenuOfDay(req, res) {
//     const menu = MenuService.getMenuOfDay();
//     return res.json({
//       status: 'success',
//       data: menu,
//     }).status(200);
//   },

//   // Add menu of the day
//   addMenuOfDay(req, res) {
//     const newMenu = req.body;
//     const updatedMenu = MenuService.addMenuOfDay(newMenu);
//     return res.json({
//       status: 'success',
//       data: updatedMenu,
//     }).status(201);
//   },

//   // Update Menu
//   updateMenuOfDay(req, res) {
//     const [id] = [req.params.id];
//     const newMenu = req.body;
//     const updateMenu = MenuService.updateMenuOfDay(id, newMenu);
//     return res.json({
//       status: 'success',
//       data: updateMenu,
//     }).status(201);
//   },

//   // Delete Menu
//   deleteMenuOfDay(req, res) {
//     const [id] = [req.params.id];
//     const deleteMenu = MenuService.deleteMenuOfDay(id);
//     return res.json({
//       status: 'success',
//       data: deleteMenu,
//     }).status(200);
//   },
// };

// export default MenuController;