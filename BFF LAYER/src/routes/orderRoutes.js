const express = require('express');
const orderService = require('../services/orderService');

const router = express.Router();
const authenticateJWT = require('../middleware/auth');
const { sendOrderConfirmationEmail } = require('../services/emailService');


// router.get('/:id', async (req, res) => {
//     try {
//         const userId = req.params.id;
//         const orders = await getOrders(userId);
//         res.json(orders);
//     } catch (err) {
//         res.status(500).json({ error: err.message || 'Failed to fetch orders' });
//     }
// });

router.post('/', async (req, res) => {
    try {
        const orderRequest = req.body;
        const response = await orderService.createOrder(orderRequest);
        console.log("Creating the order", response.data)
        await sendOrderConfirmationEmail(response.data);
        res.status(response.status).json(response.data);

    } catch (err) {
        res.status(err.response?.status || 500).send(err.response?.data || 'Failed to save order');
    }
});

module.exports = router;
