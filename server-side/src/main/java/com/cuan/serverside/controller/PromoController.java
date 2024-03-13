package com.cuan.serverside.controller;

import com.cuan.serverside.model.Promo;
import com.cuan.serverside.service.PromoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller // Define Class Controller
@RestController // Define Rest Controller for REST API
@RequestMapping("/loan/v1/promo") // Pathing
public class PromoController {
    @Autowired
    private com.cuan.serverside.service.PromoService PromoService;
    public PromoController(PromoService PromoService) {
        this.PromoService = PromoService;
    }

    // GET Function of API, Reads promo data from 'pengajuan' database
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/get-promos")
    public Iterable<Promo> getAllPromo(){
        return PromoService.getAllPromo();
    }

    // GET Function of API, Reads promo data from 'pengajuan' database by id
    @GetMapping("/{id}")
    public Promo getPromoById(@PathVariable Long id){
        return PromoService.getPromoId(id);
    }

    // POST Function of API, Creates promo data into 'pengajuan' database
    @PostMapping("/post-promo")
    public Promo savePromo(@RequestBody Promo Promo){
        return PromoService.savePromo(Promo);
    }
}
