package com.cuan.serverside.service;

import com.cuan.serverside.model.Account;

import java.util.Optional;

public interface AccountService {

    // Define GET all accounts in service
    public Iterable<Account> getAllAccount();

    // Define GET accounts by id in service
    public Account getAccountId(Long id);

    // Define POST account in service
    public Account saveAccount(Account account);

    // Define DELETE account by id in service
    public void deleteAccountById(Long id);

    // Define GET accounts by hashed id in service
    public Account getAccountByHashedId(String hashedId);

    Optional<Account> findByUsernameAccount(String username);
}
