package com.cuan.serverside.service;

import com.cuan.serverside.model.Admin;

import java.util.Optional;

public interface AdminService {
    public Iterable<Admin> getAllAdmin();

    // Define GET users by id in service
    public Admin getAdminId(Long id);

    public Admin getAdminByHashedId(String hashedId);

    // Define POST user in service
    public Admin saveAdmin(Admin admin);

    // Define GET admin by name in service
    Optional<Admin> findByUsernameAdmin(String username);
}
