package com.cuan.serverside.controller;

import com.cuan.serverside.model.Account;
import com.cuan.serverside.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller // Define Class Controller
@RestController // Define Rest Controller for REST API
@RequestMapping("/loan/v1/account") // Pathing
public class AccountController {
    // Dependency Injection, prevents coupling
    @Autowired
    private AccountService accountService;
    public AccountController(AccountService accountService) {
        this.accountService = accountService;
    }

    // GET Function of API, Reads account data from 'pengajuan' database
    @GetMapping("/get-accounts")
    public Iterable<Account> getAllAccount(){
        return accountService.getAllAccount();
    }

    // GET Function of API, Reads account data from 'pengajuan' database by id

    @GetMapping("/id/{id}")
    public Account getAccountById(@PathVariable Long id){
        return accountService.getAccountId(id);
    }

    // POST Function of API, Creates account data into 'pengajuan' database
    @PostMapping("/post-account")
    public Account saveAccount(@RequestBody Account account){
        return accountService.saveAccount(account);
    }

    // PUT Function of API, Updates admin account from 'pengajuan' database by id
    @PutMapping("/{id}")
    public Account updateAccount(@PathVariable Long id, @RequestBody Account account) {
        account.setAccount_Id(id);
        return accountService.saveAccount(account);
    }

    // DELETE Function of API, Deletes account data into 'pengajuan' database
    @DeleteMapping("/delete-account-id/{id}")
    public void deleteAccount(@PathVariable Long id) {
        accountService.deleteAccountById(id);
    }

    // GET Function of API, Reads account data from 'pengajuan' database by hashed id
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/hid/{hashedId}")
    public Account getAccountByHashedId(@PathVariable String hashedId){
        return accountService.getAccountByHashedId(hashedId);
    }

}
