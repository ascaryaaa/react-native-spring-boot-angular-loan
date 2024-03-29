package com.cuan.serverside.controller;

import com.cuan.serverside.model.DetailPinjaman;
import com.cuan.serverside.service.DetailPinjamanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller // Define Class Controller
@RestController // Define Rest Controller for REST API
@RequestMapping("/loan/v1/pinjaman") // Pathing Endpoint
public class DetailPinjamanController {
    // Dependency Injection, prevents coupling
    @Autowired
    private DetailPinjamanService detailPinjamanService;
    public DetailPinjamanController(DetailPinjamanService detailPinjamanService) {
        this.detailPinjamanService = detailPinjamanService;
    }

    // GET Function of API, Reads detail pinjaman data from 'pengajuan' database
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/get-pinjamans")
    public Iterable<DetailPinjaman> getAllDetailPinjaman(){
        return detailPinjamanService.getAllDetailPinjaman();
    }

    // GET Function of API, Reads detail pinjaman data from 'pengajuan' database by id
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/{id}")
    public DetailPinjaman getDetailPinjamanById(@PathVariable Long id){
        return detailPinjamanService.getDetailPinjamanId(id);
    }

    // POST Function of API, Creates detail pinjaman data into 'pengajuan' database
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/post-pinjaman")
    public DetailPinjaman saveDetailPinjaman(@RequestBody DetailPinjaman detailPinjaman){
        return detailPinjamanService.saveDetailPinjaman(detailPinjaman);
    }

    // PUT Function of API, Updates detail pinjaman from 'pengajuan' database by id
    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/{id}")
    public DetailPinjaman updateDetailPinjaman(@PathVariable Long id, @RequestBody DetailPinjaman detailPinjaman) {
        detailPinjaman.setIdPinjaman(id);
        return detailPinjamanService.saveDetailPinjaman(detailPinjaman);
    }

    // DELETE Function of API, Deletes detail pinjaman data into 'pengajuan' database
    @DeleteMapping("/delete-pinjaman-id/{id}")
    public void deleteDetailPinjaman(@PathVariable Long id) {
        detailPinjamanService.deleteDetailPinjamanById(id);
    }

    // Soft DELETE Function of API, Soft deletes detail pinjaman data by setting value deleted to true in 'pengajuan' database
    @DeleteMapping("/soft-delete-pinjaman/{id}")
    public void softDeletePinjaman(@PathVariable Long id) {
        detailPinjamanService.softDeleteById(id);
    }

    // GET Function of API, Reads detail pinjaman data from 'pengajuan' database by hashed id
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/hid/{hashedId}")
    public DetailPinjaman getDetailPinjamanByHashedId(@PathVariable String hashedId){
        return detailPinjamanService.getDetailPinjamanByHashedId(hashedId);
    }

    // GET Function of API, Reads detail pinjaman data from 'pengajuan' database by form id it is related to
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/get-pinjaman-form/{formId}")
    public DetailPinjaman getDetailPinjamanByFormPengajuanId(@PathVariable Long formId) {
        return detailPinjamanService.getFormByPinjamanId(formId);
    }
}
