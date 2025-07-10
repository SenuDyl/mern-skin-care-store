package com.product.products.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductSummaryDTO {
    private Long id;
    private String name;
    private Double price;
    private String imageUrl;
}
