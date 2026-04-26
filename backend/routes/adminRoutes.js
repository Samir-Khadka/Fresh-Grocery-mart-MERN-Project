const express = require('express');
const router = express.Router();
const { getAdminStats, getUsers, getOrders, updateUserRole, deleteUser, assignDriverToOrder } = require('../controllers/adminController');
const { protect, admin } = require('../middleware/auth');

const { createProduct, updateProduct, deleteProduct } = require('../controllers/productController');

router.route('/stats').get(protect, admin, getAdminStats);
router.route('/users').get(protect, admin, getUsers);
router.route('/users/:id/role').put(protect, admin, updateUserRole);
router.route('/users/:id').delete(protect, admin, deleteUser);
router.route('/orders').get(protect, admin, getOrders);
router.route('/orders/:id/assign').put(protect, admin, assignDriverToOrder);

// Product Management
router.route('/products').post(protect, admin, createProduct);
router.route('/products/:id')
    .put(protect, admin, updateProduct)
    .delete(protect, admin, deleteProduct);

module.exports = router;
