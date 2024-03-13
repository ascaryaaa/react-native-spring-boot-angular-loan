package com.cuan.serverside.repository;

import com.cuan.serverside.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

// Initialize repository by extending functions to CrudRepository
@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    // Initialize find user by name function, using this naming convention this will automate the query from JPA
    public Optional<User> findByNameUser(String name);
}
