package com.cuan.serverside.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity // Define database class
@Table(name = "detail_pembayaran") // Define the name of the table in the database
@Data // Initialize getter, setter, hashCode, equals, and toString
@NoArgsConstructor // Generate empty constructor
@AllArgsConstructor // Generate constructors with all elements
public class DetailPembayaran {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_pembayaran", updatable = false, nullable = false) // Can't be updated or null
    private Long idPembayaran;

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
}
