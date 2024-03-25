package com.cuan.serverside.service;

import com.cuan.serverside.model.Account;
import com.cuan.serverside.model.Admin;

import java.util.Optional;

public interface AccountService {
    public Account getAccountByHashedId(String hashedId);

    // Define GET all accounts in service
    public Iterable<Account> getAllAccount();

    // Define GET accounts by id in service
    public Account getAccountId(Long id);

    // Define POST account in service
    public Account saveAccount(Account account);

    // Define DELETE account by id in service
    public void deleteAccountById(Long id);

    Optional<Account> findByUsernameAccount(String username);
}
