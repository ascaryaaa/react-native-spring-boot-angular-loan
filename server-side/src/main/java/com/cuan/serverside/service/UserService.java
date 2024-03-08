package com.cuan.serverside.service;

import com.cuan.serverside.model.User;

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
}
