package com.cuan.serverside.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity // Define database class
@Table(name = "admin") // Define the name of the table in the database
@Data // Initialize getter, setter, hashCode, equals, and toString
@NoArgsConstructor // Generate empty constructor
@AllArgsConstructor // Generate constructors with all elements
public class Admin {
    // Initialize the id and attributes of table

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_admin", updatable = false, nullable = false) // Can't be updated or null
    private Long id_admin;

    // Admins full name
    @Column(name = "name_admin")
    private String name_admin;

    // Admins nik number
    @Column(name = "password_admin")
    private String password_admin;
}
