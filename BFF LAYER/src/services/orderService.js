const axios = require('axios');

const createOrder = async (orderRequest) => {
  console.log("Inside create order")
  const response = await axios.post(
    `http://localhost:8084/api/order`,
    orderRequest
  );
  console.log("Response", response)
  return response;
};

module.exports = {
  createOrder
};
