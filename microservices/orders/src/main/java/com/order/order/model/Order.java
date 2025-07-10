package com.order.order.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "orders")
@Getter
@Setter
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;

    private LocalDateTime createdAt;

    private Double totalAmount;

    private String status;

    // Billing/shipping info
    private String email;

    private String firstName;

    private String lastName;

    private String country;

    private String houseNumber;

    private String apartment;

    private String town;

    private String district;

    private String postcode;

    private String phoneNumber;

    @Column(length = 1000)
    private String additionalInformation;

    private String paymentMethod;

    @Column(length = 2000)
    private String paymentDetails;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<OrderItem> items;

}
