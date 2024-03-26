package com.cuan.serverside.controller;

import com.cuan.serverside.model.Cabang;
import com.cuan.serverside.service.CabangService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller // Define Class Controller
@RestController // Define Rest Controller for REST API
@RequestMapping("/loan/v1/cabang") // Pathing
public class CabangController {
    @Autowired
    private CabangService CabangService;
    public CabangController(CabangService CabangService) {
        this.CabangService = CabangService;
    }

    // GET Function of API, Reads cabang data from 'pengajuan' database
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/get-cabangs")
    public Iterable<Cabang> getAllCabang(){
        return CabangService.getAllCabang();
    }

    // GET Function of API, Reads cabang data from 'pengajuan' database by id
    @GetMapping("/{id}")
    public Cabang getCabangById(@PathVariable Long id){
        return CabangService.getCabangId(id);
    }

    // POST Function of API, Creates cabang data into 'pengajuan' database
    @PostMapping("/post-cabang")
    public Cabang saveCabang(@RequestBody Cabang Cabang){
        return CabangService.saveCabang(Cabang);
    }
    @PostMapping("/post-cabangs")
    public List<Cabang> saveCabangs(@RequestBody List<Cabang> cabangs){
        return CabangService.saveCabangs(cabangs);
    }
}
