package com.cuan.serverside.service;

import com.cuan.serverside.model.Admin;
import com.cuan.serverside.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminServiceImpl implements AdminService {

    @Autowired
    private AdminRepository adminRepository;

    public AdminServiceImpl(AdminRepository adminRepository) {

        this.adminRepository = adminRepository;
    }

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
}
