package com.cart.cart.repository;

import com.cart.cart.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cart.cart.model.CartItem;

@Repository
public interface CartItemRepository extends JpaRepository<CartItem, Integer> {

    @Modifying
    @Query("DELETE FROM CartItem ci WHERE ci.id = :id")
    void deleteById(int id);
}
