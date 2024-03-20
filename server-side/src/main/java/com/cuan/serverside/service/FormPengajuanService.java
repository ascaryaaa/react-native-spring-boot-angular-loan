package com.cuan.serverside.service;

import com.cuan.serverside.model.Account;
import com.cuan.serverside.model.FormPengajuan;

public interface FormPengajuanService {
    // Define GET all accounts in service
    public Iterable<FormPengajuan> getAllForm();

    // Define GET accounts by id in service
    public FormPengajuan getFormId(Long id);

    // Define POST account in service
    public FormPengajuan saveForm(FormPengajuan formPengajuan);

    public FormPengajuan updateForm(FormPengajuan formPengajuan);

    // Define DELETE account by id in service
    public void deleteFormById(Long id);
}
