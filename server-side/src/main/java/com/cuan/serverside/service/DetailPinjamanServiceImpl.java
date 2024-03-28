package com.cuan.serverside.service;

import com.cuan.serverside.model.DetailPinjaman;
import com.cuan.serverside.model.FormPengajuan;
import com.cuan.serverside.repository.DetailPinjamanRepository;
import com.cuan.serverside.repository.FormPengajuanRepository;
import com.cuan.serverside.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.time.Instant;

@Service // Define Service Implementation
public class DetailPinjamanServiceImpl implements DetailPinjamanService{
    // Dependency Injection to prevent coupling
    @Autowired
    private DetailPinjamanRepository detailPinjamanRepository;
    @Autowired
    private FormPengajuanRepository formPengajuanRepository;
    @Autowired
    private UserRepository userRepository;
    public DetailPinjamanServiceImpl(DetailPinjamanRepository detailPinjamanRepository, FormPengajuanRepository formPengajuanRepository, UserRepository userRepository) {

        this.detailPinjamanRepository = detailPinjamanRepository;
        this.formPengajuanRepository = formPengajuanRepository;
        this.userRepository = userRepository;
    }

    // Function overriding from interface
    @Override
    public Iterable<DetailPinjaman> getAllDetailPinjaman() {
        return detailPinjamanRepository.findAll();
    }

    @Override
    public DetailPinjaman getDetailPinjamanId(Long id) {
        return detailPinjamanRepository.findById(id).orElse(null);
    }

    @Override
    public DetailPinjaman getDetailPinjamanByHashedId(String hashedId) {
        return detailPinjamanRepository.findByHashedIdPinjaman(hashedId);
    }

    @Override
    public DetailPinjaman saveDetailPinjaman(DetailPinjaman detailPinjaman) {
        detailPinjaman.setDeleted(false);
        detailPinjamanRepository.save(detailPinjaman);
        String cif = hashIdWithEpochTime(detailPinjaman.getIdPinjaman());
        detailPinjaman.setHashedIdPinjaman(cif);
        return detailPinjamanRepository.save(detailPinjaman);
    }

    public static String hashIdWithEpochTime(Long id) {
        try {
            // Get current epoch time in seconds
            long epochTime = Instant.now().getEpochSecond();

            // Concatenate ID and epoch time
            String combinedString = id + "-" + epochTime;

            // Get SHA-256 MessageDigest instance
            MessageDigest digest = MessageDigest.getInstance("SHA-256");

            // Compute the hash value of the combined string
            byte[] hashBytes = digest.digest(combinedString.getBytes());

            // Convert the hash bytes to a hexadecimal string
            StringBuilder hexString = new StringBuilder();
            for (byte hashByte : hashBytes) {
                String hex = Integer.toHexString(0xff & hashByte);
                if (hex.length() == 1) {
                    hexString.append('0');
                }
                hexString.append(hex);
            }

            // Take the first 8 characters as the truncated hash
            String truncatedHash = hexString.substring(0, 8);
            return truncatedHash;
        } catch (NoSuchAlgorithmException e) {
            // Handle NoSuchAlgorithmException
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public void deleteDetailPinjamanById(Long id) {
        detailPinjamanRepository.deleteById(id);
    }

    @Override
    public void softDeleteById(Long id) {
        DetailPinjaman detailPinjaman = detailPinjamanRepository.findById(id).orElse(null);
        if (detailPinjaman != null) {
            detailPinjaman.setDeleted(true);
            detailPinjamanRepository.save(detailPinjaman);
        }
    }

    @Override
    public DetailPinjaman getFormByPinjamanId(Long formId) {
        return detailPinjamanRepository.findByPinjamanToFormIdFormPengajuanPinjaman(formId);
    }
}
