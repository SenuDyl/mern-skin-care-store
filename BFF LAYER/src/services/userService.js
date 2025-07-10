// services/userService.js
const axios = require('axios');

const USER_SERVICE_URL = process.env.USER_SERVICE_URL;

const registerUser = async (userData) => {
    console.log("Inside services")
  const response = await axios.post(`http://localhost:8082/api/v1/registration`, userData);
  return response.data;
};

const confirmToken = async (token) => {
  const response = await axios.get(`http://localhost:8082/api/v1/registration/confirm`, {
    params: { token },
  });
  return response.data;
};

const loginUser = async (credentials) => {
  console.log("Triggered login service")
  const response = await axios.post(`http://localhost:8082/api/v1/login`, credentials);
  return response.data;
};

module.exports = {
  registerUser,
  confirmToken,
  loginUser,
};
