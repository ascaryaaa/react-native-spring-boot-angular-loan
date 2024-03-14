package com.cuan.serverside.controller;

import com.cuan.serverside.model.JenisPinjaman;
import com.cuan.serverside.service.AdminService;
import com.cuan.serverside.service.JenisPinjamanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller // Define Class Controller
@RestController // Define Rest Controller for REST API
@RequestMapping("/loan/v1/jenis-pinjaman") // Pathing
public class JenisPinjamanController {
    // Dependency Injection, prevents coupling
    @Autowired
    private JenisPinjamanService JenisPinjamanService;
    public JenisPinjamanController(JenisPinjamanService JenisPinjamanService) {
        this.JenisPinjamanService = JenisPinjamanService;
    }


    // GET Function of API, Reads data from 'pengajuan' database
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/get-jenis-pinjamans")
    public Iterable<JenisPinjaman> getAllJenisPinjaman(){
        return JenisPinjamanService.getAllJenisPinjaman();
    }

    // GET Function of API, Reads data from 'pengajuan' database by id
    @GetMapping("/{id}")
    public JenisPinjaman getJenisPinjamanById(@PathVariable Long id){
        return JenisPinjamanService.getJenisPinjamanId(id);
    }

    // POST Function of API, Creates data into 'pengajuan' database
    @PostMapping("/post-jenis-pinjaman")
    public JenisPinjaman saveJenisPinjaman(@RequestBody JenisPinjaman JenisPinjaman){
        return JenisPinjamanService.saveJenisPinjaman(JenisPinjaman);
    }
}
