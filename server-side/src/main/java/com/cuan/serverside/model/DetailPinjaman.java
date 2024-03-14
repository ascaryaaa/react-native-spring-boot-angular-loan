package com.cuan.serverside.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity // Define database class
@Table(name = "pinjaman") // Define the name of the table in the database
@Data // Initialize getter, setter, hashCode, equals, and toString
@NoArgsConstructor // Generate empty constructor
@AllArgsConstructor // Generate constructors with all elements
public class DetailPinjaman {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_pinjaman", updatable = false, nullable = false) // Can't be updated or null
    private Long idPinjaman;

    @ManyToOne
    @JoinColumn(name = "id_user", referencedColumnName = "id_user")
    private User pinjamanToUser;

    @OneToOne
    @JoinColumn(name = "id_form_pengajuan_pinjaman", referencedColumnName = "id_form_pengajuan_pinjaman")
    private FormPengajuan pinjamanToForm;

    @ManyToOne
    @JoinColumn(name = "id_admin", referencedColumnName = "id_admin")
    private Admin pinjamanToAdmin;

    @Column(name = "tanggal_realisasi_pinjaman")
    private Date tanggalRealisasi;

    @Column(name = "status_pinjaman")
    private String status;

    @Column(name = "sisa_tagihan_pinjaman")
    private Long sisaTagihan;

    @Column(name = "total_bayar_tagihan_pinjaman")
    private Long totalBayarTagihan;

    @Column(name = "tanggal_bayar_tagihan_pinjaman")
    private Date tanggalBayarTagihan;
}
