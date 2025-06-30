package com.cart.cart.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.NoSuchElementException;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cart.cart.model.Cart;
import com.cart.cart.model.CartItem;
import com.cart.cart.model.CartStatus;
import com.cart.cart.repository.CartItemRepository;
import com.cart.cart.repository.CartRepository;

@Service
public class CartService {
    @Autowired
    CartRepository cartRepository;

    @Autowired
    CartItemRepository cartItemRepository; // You need to autowire this repository for saving CartItems

    // Get the cart by id
    public Cart getCartByUserId(int userId) {
        Cart cart = cartRepository.findByUserId(userId);
        if (cart == null) { // Since findByUserId returns null if no match is found
            Cart newCart = new Cart();
            newCart.setUserId(userId);
            newCart.setStatus(CartStatus.NO_ITEMS);
            newCart.setCartItems(new ArrayList<>());
            newCart.setCreatedAt(LocalDateTime.now());
            return cartRepository.save(newCart);
        }
        return cart;

    }

    // Add item to cart
    public Cart addItemToCart(int userId, int productId, int quantity) {
        Cart cart = getCartByUserId(userId);

        // Check if the product already exists in the cart
        for (CartItem item : cart.getCartItems()) {
            if (item.getProductId() == productId) {
                item.setQuantity(item.getQuantity() + quantity);
                cartItemRepository.save(item);
                return cartRepository.save(cart);
            }
        }

        // If the product does not exist in the cart, create a new CartItem
        CartItem cartItem = new CartItem();
        cartItem.setProductId(productId);
        cartItem.setQuantity(quantity);
        cartItem.setCart(cart);
        cart.setStatus(CartStatus.ON_HOLD);
        cart.getCartItems().add(cartItem);

        // Save CartItem first and then Cart
        cartItemRepository.save(cartItem);

        return cartRepository.save(cart); // Ensure cart is updated
    }

    public Cart incrementItemQuantity(int userId, int productId) throws NoSuchElementException {

        Cart cart = cartRepository.findByUserId(userId);
         if (cart == null) {
             throw new NoSuchElementException("Cart not found");
         }
        CartItem item = cart.getCartItems().stream()
                .filter(ci -> ci.getProductId() == productId)
                .findFirst()
                .orElseThrow(() -> new NoSuchElementException("Item not found in cart"));

        item.setQuantity(item.getQuantity() + 1);
        return cartRepository.save(cart);
    }

    public Cart decrementItemQuantity(int userId, int productId) throws NoSuchElementException {
        Cart cart = cartRepository.findByUserId(userId);
        if (cart == null) {
            throw new NoSuchElementException("Cart not found");
        }
        CartItem item = cart.getCartItems().stream()
                .filter(ci -> ci.getProductId() == productId)
                .findFirst()
                .orElseThrow(() -> new NoSuchElementException("Item not found in cart"));

        if (item.getQuantity() > 1) {
            item.setQuantity(item.getQuantity() - 1);
        } else {
            cart.getCartItems().remove(item); // Remove item if quantity reaches 0
        }

        return cartRepository.save(cart);
    }

    @PersistenceContext
    private EntityManager entityManager;

    // Delete an item from cart
    @Transactional
    public void removeItemFromCart(int userId, int productId) {
        Cart cart = getCartByUserId(userId);
        for (CartItem item : cart.getCartItems()) {
            if (item.getProductId() == productId) {
                cartItemRepository.deleteById(item.getId());
                break;
            }
        }
    }

    // Delete the cart
    public void deleteCart(int userId) {
        Cart cart = getCartByUserId(userId);
        cartRepository.deleteById(cart.getId());
    }
}
