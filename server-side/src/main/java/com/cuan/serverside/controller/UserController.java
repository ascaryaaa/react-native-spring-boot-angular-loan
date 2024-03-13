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
@RequestMapping("/loan/v1/user") // Pathing
public class UserController {

    // Dependency Injection, prevents coupling
    @Autowired
    private UserService userService;
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @Autowired
    private AccountService accountService;

    // Endpoint to GET Function of API, Reads data from 'pengajuan' database
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/getUsers")
    public Iterable<User> getAllUser(){
        return userService.getAllUser();
    }

    // Endpoint to GET Function of API, Reads data from 'pengajuan' database by id
    @GetMapping("/{id}")
    public User getUserById(@PathVariable Long id){
        return userService.getUserId(id);
    }

    // Endpoint to POST Function of API, Creates data into 'pengajuan' database
    @PostMapping("/postUser")
    public User saveUser(@RequestBody User user){
        Account savedAccount = accountService.saveAccount(user.getAccount());
        user.setAccount(savedAccount);
        return userService.saveUser(user);
    }

    // Endpoint to GET Function of API, Reads data from 'pengajuan' database by name
    @GetMapping("/findByName/{name}")
    public User findUserByName(@PathVariable String name) {
        return userService.findUserByName(name)
                .orElseThrow(() -> new RuntimeException("User not found with name: " + name));
    }

}
