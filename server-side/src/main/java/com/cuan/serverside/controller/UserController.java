package com.cuan.serverside.controller;

import com.cuan.serverside.model.User;
import com.cuan.serverside.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/loan/v1/user") //this is versioning
public class UserController {
    UserService userService;
    public UserController(UserService userService) { this.userService = userService; }

    @GetMapping
    public Iterable<User> getUsers() {
        return userService.getUsers();
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }

    @PostMapping
    public User insertUser(@RequestBody User user) {
        System.out.println(user);
        return userService.insertUser(user);
    }
}
