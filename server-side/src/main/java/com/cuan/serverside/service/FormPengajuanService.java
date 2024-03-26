package com.cuan.serverside.service;

import com.cuan.serverside.model.FormPengajuan;

public interface FormPengajuanService {
    // Define GET all form in service
    public Iterable<FormPengajuan> getAllForm();

    // Define GET form by id in service
    public FormPengajuan getFormId(Long id);

    // Define POST form in service
    public FormPengajuan saveForm(FormPengajuan formPengajuan);

    // Define UPDATE form in service
    public FormPengajuan updateForm(FormPengajuan formPengajuan);

    // Define DELETE form by id in service
    public void deleteFormById(Long id);

    // Define GET form by hashed id in service
    public FormPengajuan getFormByHashedId(String hashedId);

    public Iterable<FormPengajuan> getAllFormsByUserId(Long userId);
}
