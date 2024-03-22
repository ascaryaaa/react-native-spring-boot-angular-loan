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
        // Initialize the id and attributes of table

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "id_pinjaman", updatable = false, nullable = false) // Can't be updated or null
        private Long idPinjaman;

        // Assign Foreign Key from Form Pengajuan
        @OneToOne
        @JoinColumn(name = "id_form_pengajuan_pinjaman", referencedColumnName = "id_form_pengajuan_pinjaman")
        private FormPengajuan pinjamanToForm;

        @Column(name = "hashed_id_pinjaman")
        private String hashedIdPinjaman;

        @Column(name = "status_tagihan_pinjaman")
        private String statusTagihan;

        @Column(name = "kolektabilitas_pinjaman")
        private Number kolektabilitas;

        @Column(name = "deskripsi_pembayaran_pinjaman")
        private String deskripsiPembayaran;

        @Column(name = "amounts_sisa_pokok_pinjaman")
        private Long amountsSisaPokok;

        @Column(name = "rebates_sisa_pokok_pinjaman")
        private Long rebatesSisaPokok;

        @Column(name = "payoffs_sisa_pokok_pinjaman")
        private Long payoffsSisaPokok;

        @Column(name = "amounts_bunga_berjalan_pinjaman")
        private Long amountsBungaBerjalan;

        @Column(name = "rebates_bunga_berjalan_pinjaman")
        private Long rebatesBungaBerjalan;

        @Column(name = "payoffs_bunga_berjalan_pinjaman")
        private Long payoffsBungaBerjalan;

        @Column(name = "total_amounts_pinjaman")
        private Long totalAmounts;

        @Column(name = "total_rebates_pinjaman")
        private Long totalRebates;

        @Column(name = "total_payoffs_pinjaman")
        private Long totalPayoffs;

        // Remaining loan bill
        @Column(name = "sisa_tagihan_pinjaman")
        private Long sisaTagihan;

        // Total of paid loan
        @Column(name = "total_bayar_tagihan_pinjaman")
        private Long totalBayarTagihan;

        // Date of next payment
        @Column(name = "tanggal_bayar_tagihan_pinjaman")
        private Date tanggalBayarTagihan;
    }
