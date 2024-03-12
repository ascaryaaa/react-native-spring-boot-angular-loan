package com.cuan.serverside.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity // Define database class
@Table(name = "promo") // Define the name of the table in the database
@Data // Initialize getter, setter, hashCode, equals, and toString
@NoArgsConstructor // Generate empty constructor
@AllArgsConstructor // Generate constructors with all elements
public class Promo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_promo", updatable = false, nullable = false) // Can't be updated or null
    private Long idPromo;

    // Promos full name
    @Column(name = "name_promo")
    private String namePromo;

    // Promos nik number
    @Column(name = "gambar_promo")
    private String gambarPromo;
}
