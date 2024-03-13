package com.cuan.serverside.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity // Define database class
@Table(name = "jenis_pinjaman") // Define the name of the table in the database
@Data // Initialize getter, setter, hashCode, equals, and toString
@NoArgsConstructor // Generate empty constructor
@AllArgsConstructor // Generate constructors with all elements
public class JenisPinjaman {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_jenis_pinjaman", updatable = false, nullable = false) // Can't be updated or null
    private Long idJenisPinjaman;

    @Column(name = "name_jenis_pinjaman")
    private String nameJenisPinjaman;

    @Column(name = "gambar_jenis_pinjaman")
    private String gambarJenisPinjaman;

    @Column(name = "icon_jenis_pinjaman")
    private String iconJenisPinjaman;

//    @JsonIgnore
//    @ManyToOne
//    private FormPengajuan jenisToForm;
}
