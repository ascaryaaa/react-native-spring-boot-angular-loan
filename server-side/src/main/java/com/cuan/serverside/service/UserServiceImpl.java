package com.cuan.serverside.service;

import com.cuan.serverside.model.User;
import com.cuan.serverside.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service // Define Service Implementation
public class UserServiceImpl implements UserService {

    // Dependency Injection to prevent coupling
    @Autowired
    private UserRepository userRepository;
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Function overriding from interface
    @Override
    public Iterable<User> getAllUser(){
        return userRepository.findAll();
    }

    @Override
    public User getUserId(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }
}
