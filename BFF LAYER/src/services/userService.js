// services/userService.js
const axios = require('axios');

const USER_SERVICE_URL = process.env.USER_SERVICE_URL;

const registerUser = async (userData) => {
    console.log("Inside services")
  const response = await axios.post(`http://localhost:8082`, userData);
  return response.data;
};

const confirmToken = async (token) => {
  const response = await axios.get(`${USER_SERVICE_URL}/confirm`, {
    params: { token },
  });
  return response.data;
};

const loginUser = async (credentials) => {
  const response = await axios.post(`${USER_SERVICE_URL}/login`, credentials);
  return response.data;
};

module.exports = {
  registerUser,
  confirmToken,
  loginUser,
};
