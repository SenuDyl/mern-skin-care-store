package com.product.products.controller;

import java.util.List;

import com.product.products.dto.ProductSummaryDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import com.product.products.service.ProductService;
import com.product.products.dto.ProductDTO;
import com.product.products.model.Product;

import org.springframework.beans.factory.annotation.Autowired;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:3000") // Allow frontend to access this endpoint
public class ProductController {
    @Autowired
    ProductService productService;

    @GetMapping("")
    public Page<Product> getAllProducts(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "false") boolean newArrivals,
            @RequestParam(required = false) String skinConcern,
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String brand,
            @RequestParam(required = false) Double minPrice,  // Minimum price filter
            @RequestParam(required = false) Double maxPrice
    ) {
        Pageable pageable = PageRequest.of(page, size);
        return productService.getAllProducts(pageable, newArrivals, skinConcern, category, brand, minPrice, maxPrice);
    }


    @GetMapping("/{id}")
    public Product getProductById(@PathVariable Long id) {
        return productService.getProductById(id);
    }

    @PostMapping("/batch")
    public List<ProductSummaryDTO> getProductBatch(@RequestBody List<Long> ids) { return productService.getProductBatch(ids); }

    @PostMapping("")
    public Product createProduct(@RequestBody ProductDTO productDTO) {
        return productService.createProduct(productDTO);
    }

    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable Long id, @RequestBody ProductDTO productDTO) {

        return productService.updateProduct(id, productDTO);
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
    }
}
