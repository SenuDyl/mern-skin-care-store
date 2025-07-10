package com.order.order.service;

import com.order.order.dto.OrderRequest;
import com.order.order.model.Order;
import com.order.order.model.OrderItem;
import com.order.order.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public Order placeOrder(OrderRequest request) {
        Order order = new Order();
        order.setUserId(request.getUserId());
        order.setCreatedAt(LocalDateTime.now());
        order.setStatus("PENDING");

        // Set billing/shipping/payment details
        order.setEmail(request.getEmail());
        order.setFirstName(request.getFirstName());
        order.setLastName(request.getLastName());
        order.setCountry(request.getCountry());
        order.setHouseNumber(request.getHouseNumber());
        order.setApartment(request.getApartment());
        order.setTown(request.getTown());
        order.setDistrict(request.getDistrict());
        order.setPostcode(request.getPostcode());
        order.setPhoneNumber(request.getPhoneNumber());
        order.setAdditionalInformation(request.getAdditionalInformation());
        order.setPaymentMethod(request.getPaymentMethod());
        order.setPaymentDetails(request.getPaymentDetails());

        List<OrderItem> orderItems = request.getItems().stream().map(item -> {
            OrderItem orderItem = new OrderItem();
            orderItem.setProductId(item.getProductId());
            orderItem.setQuantity(item.getQuantity());
            orderItem.setPrice(item.getPrice());
            orderItem.setOrder(order);
            return orderItem;
        }).collect(Collectors.toList());

        order.setItems(orderItems);

        double total = orderItems.stream()
                .mapToDouble(i -> i.getPrice() * i.getQuantity())
                .sum();

        order.setTotalAmount(total);

        return orderRepository.save(order);
    }

    public List<Order> getOrdersByUser(Long userId) {
        return orderRepository.findByUserId(userId);
    }

    public Order getOrderById(Long orderId) {
        return orderRepository.findById(orderId).orElse(null);
    }

    // Mock method - replace with real ProductService call
    private double getProductPrice(Long productId) {
        return 100.0; // e.g. $100 fixed price for demo
    }
}
