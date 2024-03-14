package com.cuan.serverside.service;

import com.cuan.serverside.model.Admin;
import com.cuan.serverside.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service // Define Service Implementation
public class AdminServiceImpl implements AdminService {

    // Dependency Injection to prevent coupling
    @Autowired
    private AdminRepository adminRepository;

    public AdminServiceImpl(AdminRepository adminRepository) {

        this.adminRepository = adminRepository;
    }

    // Function overriding from interface
    @Override
    public Iterable<Admin> getAllAdmin() {

        return adminRepository.findAll();
    }

    @Override
    public Admin getAdminId(Long id) {

        return adminRepository.findById(id).orElse(null);
    }

    @Override
    public Admin saveAdmin(Admin admin) {

        return adminRepository.save(admin);
    }

    @Override
    public Admin findByUsernameAdmin(String username) {

        return adminRepository.findByUsernameAdmin(username);
    }

}
