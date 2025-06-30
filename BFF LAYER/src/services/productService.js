const axios = require('axios');

const { PRODUCT_SERVICE_URL } = process.env;

const getProduct = async (productId) => {
    try {
        console.log("Inside getProduct");
        const response = await axios.get(`http://localhost:8081/api/products/${productId}`);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};

const getAllProducts = async () => {
    try {
        console.log("Inside get all products")
        const response = await axios.get(`http://localhost:8081/api/products`);
        return response.data;
    } catch (error) {
        console.log("Error is here")
        throw error.response ? error.response.data : error;
    }
}

module.exports = { getProduct, getAllProducts };
