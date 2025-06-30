const axios = require('axios');

const CART_SERVICE_URL = process.env.CART_SERVICE_URL;

const getCartByUserId = async (userId) => {
    console.log("Inside cart service", userId)
  const response = await axios.get(`http://localhost:8083/api/cart/${userId}`);
  return response.data;
};

const addItemToCart = async (userId, productId, quantity) => {
  const response = await axios.put(
    `http://localhost:8083/api/cart/${userId}/${productId}`,
    { quantity }
  );
  return response.data;
};

const updateItemQuantity = async (userId, productId, action) => {
  const response = await axios.patch(
    `http://localhost:8083/api/cart/${userId}/${productId}`,
    null, // no body, just query param
    { params: { action } }
  );
  return response.data;
};

const removeItemFromCart = async (userId, productId) => {
  const response = await axios.delete(`http://localhost:8083/api/cart/${userId}/${productId}`);
  return response.data;
};

const deleteCart = async (userId) => {
  const response = await axios.delete(`http://localhost:8083/api/cart/${userId}`);
  return response.data;
};

module.exports = {
  getCartByUserId,
  addItemToCart,
  updateItemQuantity,
  removeItemFromCart,
  deleteCart,
};
