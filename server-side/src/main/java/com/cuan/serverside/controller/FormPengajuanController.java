package com.cuan.serverside.controller;

import com.cuan.serverside.model.FormPengajuan;
import com.cuan.serverside.service.FormPengajuanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


@Controller // Define Class Controller
@RestController // Define Rest Controller for REST API
@CrossOrigin(origins = "http://localhost:4200")
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
    @GetMapping("/get-form")
    public Iterable<FormPengajuan> getAllForm(){
        return formPengajuanService.getAllForm();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/get-user-form/{userId}")
    public Iterable<FormPengajuan> getAllFormsByUserId(@PathVariable Long userId){
        return formPengajuanService.getAllFormsByUserId(userId);
    }

    // GET Function of API, Reads form pengajuan data from 'pengajuan' database by id
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/{id}")
    public FormPengajuan getFormById(@PathVariable Long id){
        return formPengajuanService.getFormId(id);
    }

    // POST Function of API, Creates form pengajuan data into 'pengajuan' database
    @PostMapping("/post-form")
    public FormPengajuan saveForm(@RequestBody FormPengajuan formPengajuan){
        return formPengajuanService.saveForm(formPengajuan);
    }

    // PUT Function of API, Updates admin form pengajuan from 'pengajuan' database by id
    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/{id}")
    public FormPengajuan updateForm(@PathVariable Long id, @RequestBody FormPengajuan formPengajuan) {
        formPengajuan.setIdFormPengajuanPinjaman(id);
        return formPengajuanService.updateForm(formPengajuan);
    }

    // DELETE Function of API, Deletes form pengajuan data into 'pengajuan' database
    @DeleteMapping("/delete-form-id/{id}")
    public void deleteForm(@PathVariable Long id) {
        formPengajuanService.deleteFormById(id);
    }

    // Soft DELETE Function of API, Soft deletes form pengajuan data by setting value deleted to true in 'pengajuan' database
    @DeleteMapping("/soft-delete-form/{id}")
    public void softDeleteForm(@PathVariable Long id) {
        formPengajuanService.softDeleteById(id);
    }

    // GET Function of API, Reads form pengajuan data from 'pengajuan' database by hashed id
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/hid/{hashedId}")
    public FormPengajuan getFormPengajuanByHashedId(@PathVariable String hashedId){
        return formPengajuanService.getFormByHashedId(hashedId);
    }
}

