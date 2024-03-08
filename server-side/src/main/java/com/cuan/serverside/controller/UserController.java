package com.cuan.serverside.controller;

import com.cuan.serverside.model.User;
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

    // GET Function of API, Reads data from 'pengajuan' database
    @GetMapping
    public Iterable<User> getAllUser(){
        return userService.getAllUser();
    }

    // GET Function of API, Reads data from 'pengajuan' database by id
    @GetMapping("/{id}")
    public User getUserById(@PathVariable Long id){
        return userService.getUserId(id);
    }

    // POST Function of API, Creates data into 'pengajuan' database
    @PostMapping
    public User saveUser(@RequestBody User user){
        return userService.saveUser(user);
    }

}
