package com.cuan.serverside.service;

import com.cuan.serverside.model.Account;
import com.cuan.serverside.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.time.Instant;
import java.util.Optional;

@Service // Define Service Implementation
public class AccountServiceImpl implements AccountService{

    // Dependency Injection to prevent coupling
    @Autowired
    private AccountRepository accountRepository;
    public AccountServiceImpl(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    // Function overriding from interface
    @Override
    public Iterable<Account> getAllAccount() {
        return accountRepository.findAll();
    }

    @Override
    public Account getAccountId(Long id) {
        return accountRepository.findById(id).orElse(null);
    }

    @Override
    public Account saveAccount(Account account) {
        accountRepository.save(account);
        String cif = hashIdWithEpochTime(account.getAccount_Id());
        account.setHashedIdAccount(cif);
        return accountRepository.save(account);
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
    public void deleteAccountById(Long id) {

        accountRepository.deleteById(id);
    }
    @Override
    public Optional<Account> findByUsernameAccount(String username) {
        return Optional.ofNullable(accountRepository.findByUsernameAccount(username));
    }
    @Override
    public Account getAccountByHashedId(String hashedId) {
        return accountRepository.findByHashedIdAccount(hashedId);
    }

}
