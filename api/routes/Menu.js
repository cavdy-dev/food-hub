const express = require('express');
const MenuController = require('../controllers/Menu');

const router = express.Router();

router.get('/', MenuController.getAllMenu);
router.get('/:id', MenuController.getMenuById);
router.post('/', MenuController.createMenu);
router.put('/:id', MenuController.updateMenu);
router.delete('/:id', MenuController.deleteMenu);

module.exports = router;
