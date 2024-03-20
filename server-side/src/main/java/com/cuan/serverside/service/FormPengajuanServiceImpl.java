package com.cuan.serverside.service;

import com.cuan.serverside.model.FormPengajuan;
import com.cuan.serverside.model.JenisPinjaman;
import com.cuan.serverside.repository.FormPengajuanRepository;
import com.cuan.serverside.repository.JenisPinjamanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FormPengajuanServiceImpl implements FormPengajuanService{

    // Dependency Injection, prevents coupling
    @Autowired
    private FormPengajuanRepository formPengajuanRepository;
    @Autowired
    private JenisPinjamanRepository jenisPinjamanRepository;
    public FormPengajuanServiceImpl(FormPengajuanRepository formPengajuanRepository, JenisPinjamanRepository jenisPinjamanRepository) {
        this.formPengajuanRepository = formPengajuanRepository;
        this.jenisPinjamanRepository = jenisPinjamanRepository;
    }

//    public FormPengajuanServiceImpl(JenisPinjamanRepository jenisPinjamanRepository) {
//        this.jenisPinjamanRepository = jenisPinjamanRepository;
//    }

    @Override
    public Iterable<FormPengajuan> getAllForm() {
        return formPengajuanRepository.findAll();
    }

    @Override
    public FormPengajuan getFormId(Long id) {
        return formPengajuanRepository.findById(id).orElse(null);
    }

    @Override
    public FormPengajuan saveForm(FormPengajuan formPengajuan) {
        formPengajuan.setStatusPengajuan("Diproses");

        // Check if formToJenis is not null before accessing its properties
        Long idJenis = formPengajuan.getFormToJenis().getIdJenisPinjaman();
        JenisPinjaman jenisPinjaman = jenisPinjamanRepository.findById(idJenis).orElse(null);

        // Perform calculations or other operations using jenisPinjamanName
        Double bunga = jenisPinjaman.getBungaPinjaman();
        Long jangka = formPengajuan.getJangkaWaktu();
        Long maks = formPengajuan.getPenghasilanBersihPerbulan()/2;
        Double result = (maks) * (1 - Math.pow(1 + (bunga/12), -jangka)) / (bunga/12);

        formPengajuan.setMaksAngsuran(result);
        return formPengajuanRepository.save(formPengajuan);
    }

    @Override
    public FormPengajuan updateForm(FormPengajuan formPengajuan) {
        return formPengajuanRepository.save(formPengajuan);
    }

    @Override
    public void deleteFormById(Long id) {
        formPengajuanRepository.deleteById(id);
    }
}
