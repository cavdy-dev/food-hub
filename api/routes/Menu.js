const express = require('express');
const MenuController = require('../controllers/Menu');
const verifyToken = require('../middleware/verifyToken');

const router = express.Router();

router.get('/', MenuController.getAllMenu);
router.get('/:id', MenuController.getMenuById);
router.post('/', verifyToken, MenuController.createMenu);
router.put('/:id', verifyToken, MenuController.updateMenu);
router.delete('/:id', verifyToken, MenuController.deleteMenu);

module.exports = router;
