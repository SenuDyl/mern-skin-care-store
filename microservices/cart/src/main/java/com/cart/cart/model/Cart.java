package com.cart.cart.model;

import java.time.LocalDateTime;
import java.util.List;

import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.annotation.Generated;
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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int userId;
    @Enumerated(EnumType.STRING) // This stores the enum as a string (ON_HOLD, CHECKED_OUT, etc.)
    private CartStatus status;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "cart")
    private List<CartItem> cartItems;

    @CreationTimestamp // Automatically sets the creation timestamp
    private LocalDateTime createdAt;

    @UpdateTimestamp // Automatically updates the timestamp on any change
    private LocalDateTime updatedAt;
}
