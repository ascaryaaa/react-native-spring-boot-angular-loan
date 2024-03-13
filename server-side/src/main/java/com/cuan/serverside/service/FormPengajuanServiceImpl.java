package com.cuan.serverside.service;

import com.cuan.serverside.model.FormPengajuan;
import com.cuan.serverside.repository.AccountRepository;
import com.cuan.serverside.repository.FormPengajuanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FormPengajuanServiceImpl implements FormPengajuanService{
    @Autowired
    private FormPengajuanRepository formPengajuanRepository;
    public FormPengajuanServiceImpl(FormPengajuanRepository formPengajuanRepository) {

        this.formPengajuanRepository = formPengajuanRepository;
    }

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
        return formPengajuanRepository.save(formPengajuan);
    }

    @Override
    public void deleteFormById(Long id) {
        formPengajuanRepository.deleteById(id);
    }
}
