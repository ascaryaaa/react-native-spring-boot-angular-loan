package com.cuan.serverside.service;

import com.cuan.serverside.model.Admin;

public interface AdminService {
    public Iterable<Admin> getAllAdmin();

    // Define GET users by id in service
    public Admin getAdminId(Long id);

    // Define POST user in service
    public Admin saveAdmin(Admin admin);
}
