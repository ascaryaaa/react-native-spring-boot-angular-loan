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
    // Initialize the id and attributes of table
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_form_pengajuan_pinjaman", updatable = false, nullable = false) // Can't be updated or null
    private Long idFormPengajuanPinjaman;

    // Assign Foreign Keys from Jenis Pinjaman and User
    @ManyToOne
    @JoinColumn(name = "id_jenis_pinjaman", referencedColumnName = "id_jenis_pinjaman")
    private JenisPinjaman formToJenis;

    @ManyToOne
    @JoinColumn(name = "id_user", referencedColumnName = "id_user")
    private User formToUser;

    // Gender of debtor
    @Column(name = "jenis_kelamin_form_pengajuan_pinjaman")
    private String jenisKelamin;

    // Place of birth of the debtor
    @Column(name = "tempat_lahir_form_pengajuan_pinjaman")
    private String tempatLahir;

    // Date of birth of the debtor
    @Column(name = "tanggal_lahir_form_pengajuan_pinjaman")
    private String tanggalLahir;

    // Address according to KTP of the debtor
    @Column(name = "alamat_ktp_user_form_pengajuan_pinjaman")
    private String alamatKtp;

    // Postal code of the debtor's address
    @Column(name = "kode_pos_form_pengajuan_pinjaman")
    private String kodePos;

    // Village of the debtor's address
    @Column(name = "kelurahan_user_form_pengajuan_pinjaman")
    private String kelurahan;

    // District of the debtor's address
    @Column(name = "kecamatan_form_pengajuan_pinjaman")
    private String kecamatan;

    // Taxpayer Identification Number (NPWP) of the debtor
    @Column(name = "NPWP_form_pengajuan_pinjaman")
    private String npwp;

    // Unit affiliated with BNI (Bank Negara Indonesia) of the debtor
    @Column(name = "unit_BNI_terderkat_form_pengajuan_pinjaman")
    private String unitBNI;

    // Net monthly income of the debtor
    @Column(name = "penghasilan_bersih_perBulan_form_pengajuan_pinjaman")
    private Long penghasilanBersihPerbulan;

    // Loan amount requested by the debtor
    @Column(name = "jumlah_pinjaman_form_pengajuan_pinjaman")
    private Long jumlaPinjaman;

    // Loan term requested by the debtor (in months)
    @Column(name = "jangka_waktu_form_pengajuan_pinjaman")
    private Long jangkaWaktu;

    // Loan interest rate requested by the debtor
    @Column(name = "bunga_pinjaman_form_pengajuan_pinjaman")
    private Double bungaPinjaman;
}
