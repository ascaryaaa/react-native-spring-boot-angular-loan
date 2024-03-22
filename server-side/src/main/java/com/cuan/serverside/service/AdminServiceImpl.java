package com.cuan.serverside.service;

import com.cuan.serverside.model.Admin;
import com.cuan.serverside.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.time.Instant;
import java.util.Optional;

@Service // Define Service Implementation
public class AdminServiceImpl implements AdminService {

    // Dependency Injection to prevent coupling
    @Autowired
    private AdminRepository adminRepository;

    public AdminServiceImpl(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    // Function overriding from interface
    @Override
    public Iterable<Admin> getAllAdmin() {
        return adminRepository.findAll();
    }

    @Override
    public Admin getAdminId(Long id) {
        return adminRepository.findById(id).orElse(null);
    }

    @Override
    public Admin saveAdmin(Admin admin) {
        adminRepository.save(admin);
        String cif = hashIdWithEpochTime(admin.getIdAdmin());
        admin.setHashedIdAdmin(cif);

        return adminRepository.save(admin);
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

            // Return the hexadecimal string as the hash
            return hexString.toString();
        } catch (NoSuchAlgorithmException e) {
            // Handle NoSuchAlgorithmException
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public Optional<Admin> findByUsernameAdmin(String username) {
        return Optional.ofNullable(adminRepository.findByUsernameAdmin(username));
    }

}
