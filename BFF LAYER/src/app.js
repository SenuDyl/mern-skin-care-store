const express = require('express');
const cors = require('cors');
const cartRoutes = require('./routes/cartRoutes');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

//Register routes
app.use('/api/products', productRoutes); // Mount product routes
app.use('/api/carts', cartRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

module.exports = app;