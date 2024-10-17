// src/controllers/tradeController.js
const moomooService = require('../services/moomooService');

exports.placeOrder = async (req, res, next) => {
  try {
    const orderData = req.body;
    const result = await moomooService.placeOrder(orderData);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.getOrderStatus = async (req, res, next) => {
  try {
    const orderId = req.params.id;
    const result = await moomooService.getOrderStatus(orderId);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
