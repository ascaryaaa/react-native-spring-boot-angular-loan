package com.cuan.serverside.service;

import com.cuan.serverside.model.Account;

public interface AccountService {
    // Define GET all accounts in service
    public Iterable<Account> getAllAccount();

    // Define GET accounts by id in service
    public Account getAccountId(Long id);

    // Define POST account in service
    public Account saveAccount(Account account);

    // Define DELETE account by id in service
    public void deleteAccountById(Long id);

    public Account findByUsernameAccount(String username);
}
