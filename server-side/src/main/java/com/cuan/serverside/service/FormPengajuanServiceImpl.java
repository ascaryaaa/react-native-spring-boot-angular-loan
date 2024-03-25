package com.cuan.serverside.service;

import com.cuan.serverside.model.FormPengajuan;
import com.cuan.serverside.model.JenisPinjaman;
import com.cuan.serverside.repository.FormPengajuanRepository;
import com.cuan.serverside.repository.JenisPinjamanRepository;
import org.hashids.Hashids;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.time.Instant;

@Service
public class FormPengajuanServiceImpl implements FormPengajuanService{

    // Dependency Injection, prevents coupling
    @Autowired
    private FormPengajuanRepository formPengajuanRepository;
    @Autowired
    private JenisPinjamanRepository jenisPinjamanRepository;
    public FormPengajuanServiceImpl(FormPengajuanRepository formPengajuanRepository, JenisPinjamanRepository jenisPinjamanRepository) {
        this.formPengajuanRepository = formPengajuanRepository;
        this.jenisPinjamanRepository = jenisPinjamanRepository;
    }

//    public FormPengajuanServiceImpl(JenisPinjamanRepository jenisPinjamanRepository) {
//        this.jenisPinjamanRepository = jenisPinjamanRepository;
//    }

    @Override
    public Iterable<FormPengajuan> getAllForm() {
        return formPengajuanRepository.findAll();
    }

    @Override
    public FormPengajuan getFormId(Long id) {
        return formPengajuanRepository.findById(id).orElse(null);
    }

    @Override
    public FormPengajuan saveForm(FormPengajuan formPengajuan) {
        formPengajuan.setStatusPengajuan("Diproses");

        // Get formToJenis idJenisPinjaman to get-jenis-pinjaman
        Long idJenis = formPengajuan.getFormToJenis().getIdJenisPinjaman();
        JenisPinjaman jenisPinjaman = jenisPinjamanRepository.findById(idJenis).orElse(null);

        // Calculate maximum loan (maks angsuran)
        Double maksAngsuran = calculateMaximumLoan(formPengajuan, jenisPinjaman);
        // Set maks angsuran
        formPengajuan.setMaksAngsuran(maksAngsuran);

        // Calculate monthly bill loan (tagihan perbulan)
        Double angsuranPerbulan = calculateMonthlyBill(formPengajuan, jenisPinjaman);
        // Set angsruan perbulan
        formPengajuan.setAngsuranPerbulan(angsuranPerbulan);

        // Save first to generate Id
        formPengajuanRepository.save(formPengajuan);

        // Generate CIF from id
        Long idForm = formPengajuan.getIdFormPengajuanPinjaman();
        Hashids hashids = new Hashids(String.format("%d",idForm));
        String hashedId = hashids.encode(1L);

        String cif = generateCif(hashedId);
//        formPengajuan.setHashedIdForm(cif);
        formPengajuan.setCif(cif);
        return formPengajuanRepository.save(formPengajuan);
    }

    private Double calculateMaximumLoan(FormPengajuan formPengajuan, JenisPinjaman jenisPinjaman) {
        // Calculate maximum loan amount based on the given formula
        // MAKS = A * ( 1 - ( 1 +( i / 12 ))^-t ) / ( i / 12 )
        // A: jumlah maks angsuran (50% dari fixed income)
        // i: bunga
        // t: jangka waktu

        // Initialize the calculation
        Double bunga = jenisPinjaman.getBungaPinjaman();
        Long jangka = formPengajuan.getJangkaWaktu();
        Long maks = formPengajuan.getPenghasilanBersihPerbulan() / 2;

        // Calculate maximum loan amount
        return (maks) * (1 - Math.pow(1 + (bunga / 12), -jangka)) / (bunga / 12);
    }

    private Double calculateMonthlyBill(FormPengajuan formPengajuan, JenisPinjaman jenisPinjaman) {
        // Calculate monthly installment amount based on the given formula
        // Angsuran perbulan = (Total pinjaman*(bunga/12))/((1-(1+(bunga/12))^(-jangka waktu)))

        // Initialize the calculation
        Double bunga = jenisPinjaman.getBungaPinjaman();
        Long jangka = formPengajuan.getJangkaWaktu();
        Double result = formPengajuan.getMaksAngsuran(); // Assuming maksAngsuran is already calculated

        // Calculate monthly bill amount
        return (result * (bunga / 12)) / (1 - Math.pow(1 + (bunga / 12), -jangka));
    }

    private String generateCif(String hashedId) {

        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] hash = digest.digest(hashedId.getBytes());

            // Convert hash bytes to hexadecimal representation
            StringBuilder hexString = new StringBuilder();
            for (byte b : hash) {
                String hex = Integer.toHexString(0xff & b);
                if (hex.length() == 1) {
                    hexString.append('0');
                }
                hexString.append(hex);
            }

            // Truncate to 8 characters
            String truncatedHash = hexString.substring(0, 8);

            int number = Integer.parseInt(truncatedHash, 16);
            return String.format("W"+"%08d", number);
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
            return  null;
        }

    }

    @Override
    public FormPengajuan updateForm(FormPengajuan formPengajuan) {
        return formPengajuanRepository.save(formPengajuan);
    }

    @Override
    public void deleteFormById(Long id) {
        formPengajuanRepository.deleteById(id);
    }
}
