package com.cuan.serverside.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity // Define database class
@Table(name = "user") // Define the name of the table in the database
@Data // Initialize getter, setter, hashCode, equals, and toString
@NoArgsConstructor // Generate empty constructor
@AllArgsConstructor // Generate constructors with all elements
public class User {
    // Initialize the id and attributes of table

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_user", updatable = false, nullable = false) // Can't be updated or null
    private Long idUser;

    // User's full name
    @Column(name = "name_user")
    private String nameUser;

    // User's nik number
    @Column(name = "nik_user")
    private String nikUser;

//    // User's wallet amount
//    @Column(name = "wallet")
//    private Long wallet;

    // Introduce Json Ignore to prevent recursion
    @JsonIgnore
    @OneToOne(mappedBy = "accountToUser")
    private Account userToAccount;

    @JsonIgnore
    @OneToMany(mappedBy = "formToUser")
    private List<FormPengajuan> userToForm;
}
