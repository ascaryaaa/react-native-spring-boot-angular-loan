package com.cuan.serverside.service;

import com.cuan.serverside.model.Account;
import com.cuan.serverside.model.FormPengajuan;

public interface FormPengajuanService {
    // Define GET all form pengajuan in service
    public Iterable<FormPengajuan> getAllForm();

    // Define GET form pengajuan by id in service
    public FormPengajuan getFormId(Long id);

    // Define POST form pengajuan in service
    public FormPengajuan saveForm(FormPengajuan formPengajuan);

    // Define DELETE form pengajuan by id in service
    public void deleteFormById(Long id);
}
