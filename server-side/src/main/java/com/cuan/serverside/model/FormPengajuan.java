package com.cuan.serverside.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity // Define database class
@Table(name = "form_pengajuan") // Define the name of the table in the database
@Data // Initialize getter, setter, hashCode, equals, and toString
@NoArgsConstructor // Generate empty constructor
@AllArgsConstructor // Generate constructors with all elements
public class FormPengajuan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_form_pengajuan_pinjaman", updatable = false, nullable = false) // Can't be updated or null
    private Long idFormPengajuanPinjaman;

    @ManyToOne
    @JoinColumn(name = "id_jenis_pinjaman", referencedColumnName = "id_jenis_pinjaman")
    private JenisPinjaman formToJenis;

    @ManyToOne
    @JoinColumn(name = "id_user", referencedColumnName = "id_user")
    private User formToUser;

    @Column(name = "jenis_kelamin_form_pengajuan_pinjaman")
    private String jenisKelamin;

    @Column(name = "tempat_lahir_form_pengajuan_pinjaman")
    private String tempatLahir;

    @Column(name = "tanggal_lahir_form_pengajuan_pinjaman")
    private String tanggalLahir;

    @Column(name = "alamat_ktp_user_form_pengajuan_pinjaman")
    private String alamatKtp;

    @Column(name = "kode_pos_form_pengajuan_pinjaman")
    private String kodePos;

    @Column(name = "kelurahan_user_form_pengajuan_pinjaman")
    private String kelurahan;

    @Column(name = "kecamatan_form_pengajuan_pinjaman")
    private String kecamatan;

    @Column(name = "NPWP_form_pengajuan_pinjaman")
    private String npwp;

    @Column(name = "unit_BNI_terderkat_form_pengajuan_pinjaman")
    private String unitBNI;

    @Column(name = "penghasilan_bersih_perBulan_form_pengajuan_pinjaman")
    private Long penghasilanBersihPerbulan;

    @Column(name = "jumlah_pinjaman_form_pengajuan_pinjaman")
    private Long jumlaPinjaman;

    @Column(name = "jangka_waktu_form_pengajuan_pinjaman")
    private Long jangkaWaktu;

    @Column(name = "bunga_pinjaman_form_pengajuan_pinjaman")
    private Double bungaPinjaman;
}
