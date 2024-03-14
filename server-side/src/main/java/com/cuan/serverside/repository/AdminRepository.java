package com.cuan.serverside.repository;

import com.cuan.serverside.model.Admin;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

// Initialize repository by extending functions to CrudRepository
@Repository
public interface AdminRepository extends CrudRepository<Admin, Long> {
    public Admin findByUsernameAdmin(String username);
}
