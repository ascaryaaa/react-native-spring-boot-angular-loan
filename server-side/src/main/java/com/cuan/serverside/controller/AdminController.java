package com.cuan.serverside.controller;

import com.cuan.serverside.model.Admin;
import com.cuan.serverside.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller // Define Class Controller
@RestController // Define Rest Controller for REST API
@RequestMapping("/loan/v1/admin") // Pathing
public class AdminController {
    // Dependency Injection, prevents coupling
    @Autowired
    private AdminService AdminService;
    public AdminController(AdminService AdminService) {
        this.AdminService = AdminService;
    }

    // GET Function of API, Reads data from 'pengajuan' database
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/getAdmins")
    public Iterable<Admin> getAllAdmin(){
        return AdminService.getAllAdmin();
    }

    // GET Function of API, Reads data from 'pengajuan' database by id
    @GetMapping("/{id}")
    public Admin getAdminById(@PathVariable Long id){
        return AdminService.getAdminId(id);
    }

    // POST Function of API, Creates data into 'pengajuan' database
    @PostMapping("/postAdmin")
    public Admin saveAdmin(@RequestBody Admin Admin){
        return AdminService.saveAdmin(Admin);
    }
}
