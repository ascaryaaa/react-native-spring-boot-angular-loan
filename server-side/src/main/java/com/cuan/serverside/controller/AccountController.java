package com.cuan.serverside.controller;

import com.cuan.serverside.model.Account;
import com.cuan.serverside.model.User;
import com.cuan.serverside.service.AccountService;
import com.cuan.serverside.service.UserService;
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

    @Autowired
    private UserService userService;

    // GET Function of API, Reads account data from 'pengajuan' database
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/getAccounts")
    public Iterable<Account> getAllAccount(){
        return accountService.getAllAccount();
    }

    // GET Function of API, Reads account data from 'pengajuan' database by id
    @GetMapping("/{id}")
    public Account getAccountById(@PathVariable Long id){
        return accountService.getAccountId(id);
    }

    // POST Function of API, Creates account data into 'pengajuan' database
    @PostMapping("/postAccount")
    public Account saveAccount(@RequestBody Account user){
        User savedUser = userService.saveUser(user.getUser());
        user.setUser(savedUser);
        return accountService.saveAccount(user);
    }

    // PUT Function of API, Updates admin account from 'pengajuan' database by id
    @PutMapping("/{id}")
    public Account updateAccount(@PathVariable Long id, @RequestBody Account account) {
        account.setAccount_Id(id);
        return accountService.saveAccount(account);
    }

    // DELETE Function of API, Deletes account data into 'pengajuan' database
    @DeleteMapping("/deleteAccountId/{id}")
    public void deleteAccount(@PathVariable Long id) {
        accountService.deleteAccountById(id);
    }

}
