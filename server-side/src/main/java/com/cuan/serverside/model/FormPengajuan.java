package com.cuan.serverside.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity // Define database class
@NoArgsConstructor // Generate empty constructor
@AllArgsConstructor // Generate constructors with all elements
@Data // Initialize getter, setter, hashCode, equals, and toString
@Table(name = "form_pengajuan") // Define the name of the table in the database
public class FormPengajuan {
    // Initialize pengajuan id and attributes

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(updatable = false, nullable = false) // Can't be updated or null
    private Long pengajuanId;

    // User's npwp number
    @Column(name = "npwp")
    private String npwp; //

    // User's gender
    @Column(name = "kelamin")
    private String kelamin;

    // User's birthplace
    @Column(name = "tanggal_lahir")
    private Date tanggal_lahir;

    // User's birthdate
    @Column(name = "tempat_lahir")
    private String tempat_lahir;

    // User's address on id
    @Column(name = "alamat_ktp")
    private String alamat_ktp;

    // User's true address
    @Column(name = "alamat_domisili")
    private String alamat_domisili;

    // User's email
    @Column(name = "email")
    private String email;

    // User's phone number
    @Column(name = "no_hp")
    private String no_hp;

    // Maiden name of user's mother
    @Column(name = "ibu_kandung")
    private String ibu_kandung;

    // User's occupation
    @Column(name = "pekerjaan")
    private String pekerjaan;
}
