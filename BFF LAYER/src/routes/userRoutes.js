// controllers/userController.js
const express = require('express');
const router = express.Router();
const userService = require('../services/userService');

router.post('/register', async (req, res) => {
  try {
    console.log("Inside user services")
    const result = await userService.registerUser(req.body);
    res.status(200).send(result);
  } catch (error) {
    res.status(error.response?.status || 500).send(error.response?.data || 'Registration error');
  }
});

router.get('/confirm', async (req, res) => {
  try {
    const result = await userService.confirmToken(req.query.token);
    res.status(200).send(result);
  } catch (error) {
    res.status(error.response?.status || 500).send(error.response?.data || 'Confirmation error');
  }
});

router.post('/login', async (req, res) => {
  try {
    console.log("Triggered login route")
    const result = await userService.loginUser(req.body);
    res.status(200).send(result);
  } catch (error) {
    res.status(error.response?.status || 500).send(error.response?.data || 'Login error');
  }
});

module.exports = router;
