package com.cuan.serverside.service;

import com.cuan.serverside.model.Account;
import com.cuan.serverside.model.Admin;
import com.cuan.serverside.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
        return accountRepository.save(account);
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
