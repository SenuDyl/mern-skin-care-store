package com.product.products.service;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import com.product.products.dao.BrandRepository;
import com.product.products.model.Brand;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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

import static org.antlr.v4.runtime.tree.xpath.XPath.findAll;

@Service
public class ProductService {
    @Autowired
    ProductRepository productRepository;
    @Autowired
    CategoryRepository categoryRepository;

    @Autowired
    BrandRepository brandRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Page<Product> getAllProducts(Pageable pageable, boolean newArrivals, String skinConcern, String category, String brand, Double minPrice, Double maxPrice) {
        // Filter by new arrivals
        if (newArrivals) {
            LocalDateTime threshold = LocalDateTime.now().minusDays(30);
            return productRepository.findByCreatedDateAfter(threshold, pageable);
        }

        // Filter by skin concern
        if (skinConcern != null) {
            return productRepository.findBySkinConcerns(skinConcern, pageable);
        }

        // Filter by category
        if (category != null) {
            List<Category> categories = categoryRepository.findAll();
            for (Category c : categories) {
                if (c.getName().equals(category)) {
                    // Filter by price if both minPrice and maxPrice are provided
                    if (minPrice != null && maxPrice != null) {
                        return productRepository.findByCategoryAndPriceBetween(c, minPrice, maxPrice, pageable);
                    }
                    // If no price filter, just return by category
                    return productRepository.findByCategory(c, pageable);
                }
            }
        }

        // Filter by brand
        if (brand != null) {
            List<Brand> brands = brandRepository.findAll();
            for (Brand b : brands) {
                if (b.getName().equals(brand)) {
                    // Filter by price if either minPrice or maxPrice is provided
                    if (minPrice != null || maxPrice != null) {
                        return productRepository.findByBrandAndPriceBetween(b, minPrice, maxPrice, pageable);
                    } else {
                        return productRepository.findByBrand(b, pageable);
                    }
                }
            }
        }

        // Return all products if no filters are applied
        return productRepository.findAll(pageable);
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

        // Find brand
        Optional<Brand> brandOptional = brandRepository.findByName(productDTO.getBrandName());
        if (brandOptional.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Brand not found!");
        }

        Product product = new Product();
        Brand brand = new Brand();
        product.setName(productDTO.getName());
        product.setDescription(productDTO.getDescription());
        product.setPrice(productDTO.getPrice());
        product.setImageUrl(productDTO.getImageUrl());
        product.setCategory(categoryOptional.get());
        product.setBrand(brandOptional.get());
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

        // Find brand
        Optional<Brand> brandOptional = brandRepository.findByName(productDTO.getBrandName());
        if (brandOptional.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Brand not found!");
        }

        existingProduct.setName(productDTO.getName());
        existingProduct.setCategory(categoryOptional.get());
        existingProduct.setDescription(productDTO.getDescription());
        existingProduct.setPrice(productDTO.getPrice());
        existingProduct.setImageUrl(productDTO.getImageUrl());
        existingProduct.setBrand(brandOptional.get());
        return productRepository.save(existingProduct);
    }

    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }
}
