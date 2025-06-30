package com.product.products.dao;

import com.product.products.model.Brand;
import com.product.products.model.Category;
import com.product.products.model.SkinConcern;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.product.products.model.Product;

import java.time.LocalDateTime;
import java.util.Date;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    Page<Product> findByCreatedDateAfter(LocalDateTime createdDate, Pageable pageable);
    Page<Product> findAll(Pageable pageable);
    @Query(value = "SELECT p.* FROM products p " +
            "LEFT JOIN product_skin_concern psc ON p.id = psc.product_id " +
            "LEFT JOIN skin_concerns sc ON psc.skin_concern_id = sc.id " +
            "WHERE sc.name = :skinConcern",
            countQuery = "SELECT COUNT(p.id) FROM products p " +
                    "LEFT JOIN product_skin_concern psc ON p.id = psc.product_id " +
                    "LEFT JOIN skin_concerns sc ON psc.skin_concern_id = sc.id " +
                    "WHERE sc.name = :skinConcern",
            nativeQuery = true)
    Page<Product> findBySkinConcerns(@Param("skinConcern") String skinConcern, Pageable pageable);
    Page<Product> findByCategory(Category category, Pageable pageable);
    Page<Product> findByBrand(Brand brand, Pageable pageable);
    Page<Product> findByBrandAndPriceBetween(Brand brand, Double priceMin, Double priceMax, Pageable pageable);
    Page<Product> findByCategoryAndPriceBetween(Category category, Double priceMin, Double priceMax, Pageable pageable);
    Page<Product> findBySkinConcernsAndPriceBetween(SkinConcern skinConcern, Double priceMin, Double priceMax, Pageable pageable);

}
