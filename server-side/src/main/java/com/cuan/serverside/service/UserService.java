package com.cuan.serverside.service;

import com.cuan.serverside.model.FormPengajuan;
import com.cuan.serverside.model.User;

import java.util.Optional;

// Service Layer pattern
// Service Interface of User
// To Promote Modularity And Testability
public interface UserService {
    // Define GET users function in service
    public Iterable<User> getAllUser();

    // Define GET users by id in service
    public User getUserId(Long id);

    // Define POST user in service
    public User saveUser(User user);

    // Define GET users by name in service
    public Optional<User> findUserByName(String name);

//    public Iterable<FormPengajuan> getAllFormsByUserId(Long id);
}
