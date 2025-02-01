package com.cart.cart.model;

import java.util.List;

import jakarta.annotation.Generated;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "cart")
@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
public class Cart {
    @Id
    @Generated(value = "increment")
    private int id;
    private int userId;
    @Enumerated(EnumType.STRING) // This stores the enum as a string (ON_HOLD, CHECKED_OUT, etc.)
    private CartStatus status;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "cart")
    private List<CartItem> cartItems;
}
