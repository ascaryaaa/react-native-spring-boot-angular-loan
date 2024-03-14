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
    private Long idAdmin;

    // Admins full name
    @Column(name = "name_admin")
    private String nameAdmin;
    // Admins full name

    @Column(name = "npp_admin")
    private String nppAdmin;

    // Admins full name
    @Column(name = "username_admin")
    private String usernameAdmin;

    // Admins nik number
    @Column(name = "password_admin")
    private String passwordAdmin;

    @Column(name = "profilepict_admin")
    private String profilepictdAdmin;

    public Admin(String usernameAdmin, String passwordAdmin) {
        this.usernameAdmin = usernameAdmin;
        this.passwordAdmin = passwordAdmin;
    }
}
