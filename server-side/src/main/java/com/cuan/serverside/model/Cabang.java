package com.cuan.serverside.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity // Define database class
@Table(name = "cabang") // Define the name of the table in the database
@Data // Initialize getter, setter, hashCode, equals, and toString
@NoArgsConstructor // Generate empty constructor
@AllArgsConstructor // Generate constructors with all elements
public class Cabang {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_cabang", updatable = false, nullable = false) // Can't be updated or null
    private Long idCabang;

//    @JsonIgnore
//    @OneToMany(mappedBy = "formToCabang")
//    private List<FormPengajuan> cabangToForm;

    // Cabang name
    @Column(name = "name_cabang")
    private String nameCabang;

    // Cabang kota
    @Column(name = "kota_cabang")
    private String kotaCabang;

    // Cabang kota
    @Column(name = "kode_cabang")
        private String kodeCabang;
}
