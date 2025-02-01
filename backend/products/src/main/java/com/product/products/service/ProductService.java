package com.product.products.service;

import java.util.List;
import java.util.Optional;

import org.springframework.web.server.ResponseStatusException;

import com.product.products.dao.CategoryRepository;
import com.product.products.dao.ProductRepository;
import com.product.products.dto.ProductDTO;
import com.product.products.model.Product;
import com.product.products.model.Category;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

@Service
public class ProductService {
    @Autowired
    ProductRepository productRepository;
    @Autowired
    CategoryRepository categoryRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(Long id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found!"));
    }

    public Product createProduct(@RequestBody ProductDTO productDTO) {
        Optional<Category> categoryOptional = categoryRepository.findByName(productDTO.getCategoryName());

        if (categoryOptional.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "Category not found!");
        }

        Product product = new Product();
        product.setName(productDTO.getName());
        product.setDescription(productDTO.getDescription());
        product.setPrice(productDTO.getPrice());
        product.setImageUrl(productDTO.getImageUrl());
        product.setCategory(categoryOptional.get());
        return productRepository.save(product);
    }

    public Product updateProduct(Long id, @RequestBody ProductDTO productDTO) {
        Product existingProduct = productRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found!"));
        Optional<Category> categoryOptional = categoryRepository.findByName(productDTO.getCategoryName());

        if (categoryOptional.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "Category not found!");
        }
        existingProduct.setName(productDTO.getName());
        existingProduct.setCategory(categoryOptional.get());
        existingProduct.setDescription(productDTO.getDescription());
        existingProduct.setPrice(productDTO.getPrice());
        existingProduct.setImageUrl(productDTO.getImageUrl());
        return productRepository.save(existingProduct);
    }

    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }
}
