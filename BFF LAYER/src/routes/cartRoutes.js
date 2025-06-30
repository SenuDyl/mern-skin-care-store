const express = require('express');
const router = express.Router();
const cartService = require('../services/cartService');

router.get('/:userId', async (req, res) => {
  try {
    const cart = await cartService.getCartByUserId(req.params.userId);
    res.json(cart);
  } catch (err) {
    res.status(err.response?.status || 500).send(err.response?.data || 'Failed to get cart');
  }
});

router.put('/:userId/:productId', async (req, res) => {
  try {
    const { userId, productId } = req.params;
    const { quantity } = req.body;
    const updatedCart = await cartService.addItemToCart(userId, productId, quantity);
    res.json(updatedCart);
  } catch (err) {
    res.status(err.response?.status || 500).send(err.response?.data || 'Failed to add item');
  }
});

router.patch('/:userId/:productId', async (req, res) => {
  try {
    const { userId, productId } = req.params;
    const { action } = req.query;
    const updatedCart = await cartService.updateItemQuantity(userId, productId, action);
    res.json(updatedCart);
  } catch (err) {
    res.status(err.response?.status || 500).send(err.response?.data || 'Failed to update quantity');
  }
});

router.delete('/:userId/:productId', async (req, res) => {
  try {
    const { userId, productId } = req.params;
    await cartService.removeItemFromCart(userId, productId);
    res.status(204).send('Item removed successfully');
  } catch (err) {
    res.status(err.response?.status || 500).send(err.response?.data || 'Failed to remove item');
  }
});

router.delete('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    await cartService.deleteCart(userId);
    res.status(204).send('Cart deleted successfully');
  } catch (err) {
    res.status(err.response?.status || 500).send(err.response?.data || 'Failed to delete cart');
  }
});

module.exports = router;
