package com.cuan.serverside.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity // Define database class
@Table(name = "account") // Define the name of the table in the database
@Data // Initialize getter, setter, hashCode, equals, and toString
@NoArgsConstructor // Generate empty constructor
@AllArgsConstructor // Generate constructors with all elements
public class Account {
    // Initialize the id and attributes of table

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "account_Id", updatable = false, nullable = false) // Can't be updated or null
    private Long account_Id;

    @Column(name = "hashed_id_account")
    private String hashedIdAccount;

    // PIN of account
    @Column(name = "mpin_account")
    private String passwordAccount;

    // Username of account
    @Column(name = "username_account")
    private String usernameAccount;

    // Foreign key from Id User
    @OneToOne
    @JoinColumn(name = "id_user", referencedColumnName = "id_user")
    private User accountToUser;

    public Account(String passwordAccount, String usernameAccount) {
        this.passwordAccount = passwordAccount;
        this.usernameAccount = usernameAccount;
    }
}
