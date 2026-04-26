const express = require('express');
const router = express.Router();
const { 
    addOrderItems, 
    getOrderById, 
    getMyOrders, 
    updateOrderToDelivered, 
    getDriverOrders,
    updateOrderStatus
} = require('../controllers/orderController');
const { protect, driver } = require('../middleware/auth');

router.route('/').post(protect, addOrderItems);
router.route('/myorders').get(protect, getMyOrders);
router.route('/driverorders').get(protect, driver, getDriverOrders);
router.route('/:id').get(protect, getOrderById);
router.route('/:id/deliver').put(protect, updateOrderToDelivered);
router.route('/:id/status').put(protect, updateOrderStatus);

module.exports = router;
