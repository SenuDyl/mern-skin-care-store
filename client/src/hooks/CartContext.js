import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const API_URL = 'http://localhost:5000/api/carts';
    const { user } = useAuth();

    // Assume userId is retrieved from localStorage or auth context
    const userId = user?.id;

    const addToCart = async (product) => {
        const currentCart = Array.isArray(cartItems) ? cartItems : [];

        const existing = currentCart.find(item => item.id === product.id);
        let newQuantity = 1;
        if (existing) newQuantity = existing.quantity + 1;

        const updatedCart = existing
            ? currentCart.map(item =>
                item.id === product.id ? { ...item, quantity: newQuantity } : item
            )
            : [...currentCart, { ...product, quantity: 1 }];

        setCartItems(updatedCart);

        try {
            await axios.put(`${API_URL}/${userId}/${product.id}`, { quantity: newQuantity });
        } catch (err) {
            console.error("Error syncing cart (add):", err);
        }
    };

    const removeFromCart = async (productId) => {
        setCartItems(items => items.filter(item => item.id !== productId));

        try {
            if (cartItems.length > 0) {
                console.log("Product Id", productId)
                await axios.delete(`${API_URL}/${userId}/${productId}`);
                await fetchCart();
            } else {
                clearCart()
                await fetchCart();
            }
        } catch (err) {
            console.error("Error removing item:", err);
        }
    };

    const updateQuantity = async (productId, quantity) => {
        console.log("Product Id when updating", productId)
        setCartItems(items =>
            items.map(item =>
                item.id === productId ? { ...item, quantity } : item
            )
        );

        try {
            await axios.patch(`${API_URL}/${userId}/${productId}?quantity=${quantity}`);
            await fetchCart();
        } catch (err) {
            console.error("Error updating quantity:", err);
        }
    };

    const clearCart = async () => {
        setCartItems([]);

        try {
            await axios.delete(`${API_URL}/${userId}`);
        } catch (err) {
            console.error("Error clearing cart:", err);
        }
    };

    // Inside CartProvider component
    const fetchCart = async () => {
        try {
            if (!userId) return;
            console.log("Fetching cart...");
            const res = await axios.get(`${API_URL}/${userId}`);
            setCartItems(res.data.cartItems);

            console.log("Cart Items", res.data.cartItems);
        } catch (err) {
            console.error("Error loading cart:", err);
        }
    };

    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, fetchCart }}
        >
            {children}
        </CartContext.Provider>
    );
};
