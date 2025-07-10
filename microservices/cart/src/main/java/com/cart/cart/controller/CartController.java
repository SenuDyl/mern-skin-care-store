package com.cart.cart.controller;

import com.cart.cart.dto.QuantityDTO;
import org.springframework.web.bind.annotation.*;

import com.cart.cart.model.Cart;
import com.cart.cart.model.CartItem;
import com.cart.cart.service.CartService;

import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@RestController()
@RequestMapping("/api/cart")
@CrossOrigin(origins = "http://localhost:3000") // Allow frontend to access this endpoint
public class CartController {

    @Autowired
    private CartService cartService;

    @GetMapping("/{userId}")
    public Cart getCartByUserId(@PathVariable int userId) {
        return cartService.getCartByUserId(userId);
    }

    @PutMapping("/{userId}/{productId}")
    public ResponseEntity<Cart> addItemToCart(
            @PathVariable int userId,
            @PathVariable int productId,
            @RequestBody QuantityDTO quantityDTO) {

        try {
            // Assuming the service adds the product to the user's cart
            Cart updatedCart = cartService.addItemToCart(userId, productId, quantityDTO.getQuantity());
            return ResponseEntity.ok(updatedCart);
        } catch (NoSuchElementException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null); // User or product not found
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null); // Generic error handling
        }
    }

    @PatchMapping("/{userId}/{productId}")
    public ResponseEntity<Cart> updateItemQuantity(
            @PathVariable int userId,
            @PathVariable int productId,
            @RequestParam String action) {  // "increment" or "decrement"

        try {
            Cart updatedCart;

            if ("increment".equalsIgnoreCase(action)) {
                updatedCart = cartService.incrementItemQuantity(userId, productId);
            } else if ("decrement".equalsIgnoreCase(action)) {
                updatedCart = cartService.decrementItemQuantity(userId, productId);
            } else {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
            }

            return ResponseEntity.ok(updatedCart);
        } catch (NoSuchElementException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }

    @DeleteMapping("/{userId}/{productId}")
    public ResponseEntity<String> removeItemFromCart(
            @PathVariable int userId,
            @PathVariable int productId
    ) {
        try {
            cartService.removeItemFromCart(userId, productId);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Item removed successfully");
        } catch (NoSuchElementException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Item not found in cart");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred");
        }
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<String> deleteCart(
            @PathVariable int userId
    ) {
        try {
            cartService.deleteCart(userId);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Item removed successfully");
        } catch (NoSuchElementException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

}
