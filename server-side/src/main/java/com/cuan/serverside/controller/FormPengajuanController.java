package com.cuan.serverside.controller;

import com.cuan.serverside.model.FormPengajuan;
import com.cuan.serverside.service.FormPengajuanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller // Define Class Controller
@RestController // Define Rest Controller for REST API
@RequestMapping("/loan/v1/form") // Pathing
public class FormPengajuanController {
    // Dependency Injection, prevents coupling
    @Autowired
    private FormPengajuanService formPengajuanService;
    public FormPengajuanController(FormPengajuanService formPengajuanService) {
        this.formPengajuanService = formPengajuanService;
    }

    // GET Function of API, Reads form pengajuan data from 'pengajuan' database
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/getForm")
    public Iterable<FormPengajuan> getAllForm(){
        return formPengajuanService.getAllForm();
    }

    // GET Function of API, Reads form pengajuan data from 'pengajuan' database by id
    @GetMapping("/{id}")
    public FormPengajuan getFormById(@PathVariable Long id){
        return formPengajuanService.getFormId(id);
    }

    // POST Function of API, Creates form pengajuan data into 'pengajuan' database
    @PostMapping("/postForm")
    public FormPengajuan saveForm(@RequestBody FormPengajuan formPengajuan){
//        User savedUser = userService.saveUser(account.getUser());
//        account.setUser(savedUser);
        return formPengajuanService.saveForm(formPengajuan);
    }

    // PUT Function of API, Updates admin form pengajuan from 'pengajuan' database by id
    @PutMapping("/{id}")
    public FormPengajuan updateForm(@PathVariable Long id, @RequestBody FormPengajuan formPengajuan) {
        formPengajuan.setIdFormPengajuanPinjaman(id);
        return formPengajuanService.saveForm(formPengajuan);
    }

    // DELETE Function of API, Deletes form pengajuan data into 'pengajuan' database
    @DeleteMapping("/deleteFormId/{id}")
    public void deleteForm(@PathVariable Long id) {
        formPengajuanService.deleteFormById(id);
    }
}