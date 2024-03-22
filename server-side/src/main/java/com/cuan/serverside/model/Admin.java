package com.cuan.serverside.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

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

    @Column(name = "hashed_id_admin")
    private String hashedIdAdmin;

    // Admin's full name
    @Column(name = "name_admin")
    private String nameAdmin;

    // Admin's NPP (Employee Id)
    @Column(name = "npp_admin")
    private String nppAdmin;

    // Admins username
    @Column(name = "username_admin")
    private String usernameAdmin;

    // Admins password
    @Column(name = "password_admin")
    private String passwordAdmin;

    // Admin's profile picture
    @Column(name = "profilepict_admin")
    private String profilepictAdmin;

    public Admin(String usernameAdmin, String passwordAdmin) {
        this.usernameAdmin = usernameAdmin;
        this.passwordAdmin = passwordAdmin;
    }
}
