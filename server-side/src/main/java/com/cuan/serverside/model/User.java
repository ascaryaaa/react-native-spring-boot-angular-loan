package com.cuan.serverside.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity // Define database class
@NoArgsConstructor // Generate empty constructor
@AllArgsConstructor // Generate constructors with all elements
@Data // Initialize getter, setter, hashCode, equals, and toString
@Table(name = "user") // Define the name of the table in the database
public class User {
    // Initialize the id and attributes of table

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "akunId", updatable = false, nullable = false) // Can't be updated or null
    private Long akunId;

    // User's full name
    @Column(name = "namafull_user")
    private String namafull_user;

    // User's id number
    @Column(name = "nik_user")
    private String nik_user;
}
