package com.product.products.model;

import java.time.LocalDateTime;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@EntityListeners(AuditingEntityListener.class)
@Table(name = "products")
@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    private Double price; // Base price for the product (optional, can be overridden by variant prices)
    private String imageUrl;
    private Integer stock; // Optional base stock count

    @ManyToOne
    @JoinColumn(name = "category_id", referencedColumnName = "id")
    private Category category; // Many products belong to one category

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "product")
    private List<Review> reviews; // Reviews are mapped by the 'product' field in Review

    @ManyToOne
    @JoinColumn(name = "brand_id", referencedColumnName = "id")
    @JsonIgnore
    private Brand brand; // A brand can have multiple products

    @ManyToMany
    @JoinTable(
            name = "product_skin_concern",
            joinColumns = @JoinColumn(name = "product_id"),
            inverseJoinColumns = @JoinColumn(name = "skin_concern_id")
    )
    private List<SkinConcern> skinConcerns; // A product can have multiple skin concerns

    @CreatedDate
    @Column(name = "created_date", updatable = false)
    private LocalDateTime createdDate;

    @LastModifiedDate
    @Column(name = "updated_date")
    private LocalDateTime updatedDate;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "product")
    private List<ProductVariant> variants; // A product can have multiple variants (sizes, colors, etc.)
}


