package com.cuan.serverside.controller;

import com.cuan.serverside.model.Account;
import com.cuan.serverside.model.User;
import com.cuan.serverside.service.AccountService;
import com.cuan.serverside.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RestController
@RequestMapping("/api/user")
public class AccountController {
    @Autowired
    private AccountService accountService;
    public AccountController(AccountService accountService) {
        this.accountService = accountService;
    }

    @Autowired
    private UserService userService;

    @GetMapping
    public Iterable<Account> getAllAccount(){
        return accountService.getAllAccount();
    }

    @GetMapping("/{id}")
    public Account getAccountById(@PathVariable Long id){
        return accountService.getAccountId(id);
    }

    @PostMapping
    public Account saveAccount(@RequestBody Account user){
        User savedUser = userService.saveUser(user.getUser());
        user.setUser(savedUser);
        return accountService.saveAccount(user);
    }

    @PutMapping("/{id}")
    public Account updateAccount(@PathVariable Long id, @RequestBody Account account) {
        account.setAccount_Id(id);
        return accountService.saveAccount(account);
    }

    @DeleteMapping("/{id}")
    public void deleteAccount(@PathVariable Long id) {
        accountService.deleteAccountById(id);
    }

}
