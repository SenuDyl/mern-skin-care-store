const axios = require('axios');

const CART_SERVICE_URL = process.env.CART_SERVICE_URL;

const getCartByUserId = async (userId) => {
  console.log("Inside cart service", userId);

  const cartResponse = await axios.get(`http://localhost:8083/api/cart/${userId}`);

  if (cartResponse.data.status === "ON_HOLD") {
    const cartItems = cartResponse.data.cartItems;
    console.log("Cart Details", cartItems);

    const productIds = [...new Set(cartItems.map(item => item.productId).filter(Boolean))];
    console.log("Product IDs from the cart", productIds);

    const productDetailsResponse = await axios.post(
      `http://localhost:8081/api/products/batch`,
      productIds,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    const productDetails = productDetailsResponse.data;
    console.log("Product Details", productDetails);

    const productMap = {};
    for (const product of productDetails) {
      productMap[product.id] = product;
    }

    // 🧩 Enrich cart items with product data
    const enrichedCartItems = cartItems.map(item => {
      const product = productMap[item.productId] || {};
      return {
        productId: item.productId,
        quantity: item.quantity,
        name: product.name || "Unknown",
        price: product.price || 0,
        imageUrl: product.imageUrl || ""
      };
    });

    return {
      userId,
      cartItems: enrichedCartItems
    };
  }

  return {
    userId,
    cartItems: []
  };
};

const addItemToCart = async (userId, productId, quantity) => {
  const response = await axios.put(
    `http://localhost:8083/api/cart/${userId}/${productId}`,
    { quantity }
  );
  return response.data;
};

const updateItemQuantity = async (userId, productId, quantity) => {
  const response = await axios.patch(
    `http://localhost:8083/api/cart/${userId}/${productId}`,
    null, // no body, just query param
    { params: { quantity } }
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
