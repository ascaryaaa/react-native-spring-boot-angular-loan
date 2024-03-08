package com.cuan.serverside.service;

import com.cuan.serverside.model.User;
import com.cuan.serverside.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{
    UserRepository userRepository;
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public Iterable<User> getUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    @Override
    public User getUserByName(String name) {
        return null;
    }

    @Override
    public User insertUser(User user) {
        return userRepository.save(user);
    }
}
