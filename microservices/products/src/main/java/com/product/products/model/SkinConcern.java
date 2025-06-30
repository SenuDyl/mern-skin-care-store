package com.product.products.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "skin_concerns")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SkinConcern {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @ManyToMany(mappedBy = "skinConcerns")
    @JsonIgnore
    private List<Product> products; // Many products can be linked to one skin concern
}

