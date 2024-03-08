package com.cuan.serverside.service;

import com.cuan.serverside.model.User;

public interface UserService {
    // Define GET users function in service
    Iterable<User> getUsers();

    // Define GET users by id in service
    User getUserById(Long id);

    // Define GET users by name in service
    User getUserByName(String name);

    User insertUser(User user);
}
