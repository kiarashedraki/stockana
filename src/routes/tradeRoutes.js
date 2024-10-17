// src/routes/tradeRoutes.js
const express = require('express');
const router = express.Router();
const tradeController = require('../controllers/tradeController');

// Place an order
router.post('/order', tradeController.placeOrder);

// Get order status
router.get('/order/:id', tradeController.getOrderStatus);

module.exports = router;
