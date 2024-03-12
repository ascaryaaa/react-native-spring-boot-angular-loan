package com.cuan.serverside.service;

import com.cuan.serverside.model.Account;

public interface AccountService {
    public Iterable<Account> getAllAccount();

    public Account getAccountId(Long id);

    public Account saveAccount(Account account);

    public void deleteAccountById(Long id);
}
