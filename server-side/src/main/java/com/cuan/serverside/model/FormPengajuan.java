package com.cuan.serverside.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Date;

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

    // Assign Foreign Keys from Jenis Pinjaman, Admin, and User
    @ManyToOne
    @JoinColumn(name = "id_jenis_pinjaman", referencedColumnName = "id_jenis_pinjaman")
    private JenisPinjaman formToJenis;

    @ManyToOne
    @JoinColumn(name = "id_user", referencedColumnName = "id_user")
    private User formToUser;

    @ManyToOne
    @JoinColumn(name = "id_admin", referencedColumnName = "id_admin")
    private Admin formToAdmin;

    @ManyToOne
    @JoinColumn(name = "id_cabang", referencedColumnName = "id_cabang")
    private Cabang formToCabang;

    @JsonIgnore
    @OneToOne(mappedBy = "pinjamanToForm")
    private DetailPinjaman formToPinjaman;

    @Column(name = "hashed_id_form_pengajuan_pinjaman")
    private String hashedIdForm;

    // Generate CIF from Id
    @Column(name = "cif")
    private String cif;

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

    // Net monthly income of the debtor
    @Column(name = "penghasilan_bersih_perBulan_form_pengajuan_pinjaman")
    private Long penghasilanBersihPerbulan;

    // Loan amount requested by the debtor
    @Column(name = "jumlah_pinjaman_form_pengajuan_pinjaman")
    private Long jumlahPinjaman;

    // Loan term requested by the debtor (in months)
    @Column(name = "jangka_waktu_form_pengajuan_pinjaman")
    private Long jangkaWaktu;
    
    // Monthly installment amount
    @Column(name = "angsuran_perBulan_form_pengajuan_pinjaman")
    private Double angsuranPerbulan;

    @Column(name = "maks_angsuran_griya")
    private Double maksAngsuran;

    // Price of the house being purchased
    @Column(name = "harga_rumah_form_pengajuan_pinjaman")
    private Long hargaRumah;

    // Percentage of down payment
    @Column(name = "persentase_uang_muka_form_pengajuan_pinjaman")
    private Double persentaseUangMuka;

    // Amount of down payment
    @Column(name = "uang_muka_form_pengajuan_pinjaman")
    private Long uangMuka;

    // Status of loan approved by admin
    @Column(name = "status_form_pengajuan_pinjaman")
    private String statusPengajuan;

    // Date of loan realization
    @Column(name = "tanggal_realisasi_pinjaman")
    private Date tanggalRealisasi;

    // Date of loan realization
    @Column(name = "tanggal_pengajuan")
    private LocalDate tanggalPengajuan;

    // Soft delete status FE!N
    @Column(name = "is_deleted")
    private boolean deleted;
}
