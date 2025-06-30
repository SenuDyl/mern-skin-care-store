const express = require('express');
const { getProduct, getAllProducts } = require('../services/productService');

const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
    try {
        const products = await getAllProducts(); 
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message || 'Failed to fetch products' });
    }
});

// Get a single product by ID
router.get('/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await getProduct(productId);
        res.json(product);
    } catch (err) {
        res.status(500).json({ error: err.message || 'Failed to fetch product' });
    }
});

module.exports = router;
