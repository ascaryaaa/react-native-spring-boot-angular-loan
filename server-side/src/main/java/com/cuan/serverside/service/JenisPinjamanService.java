package com.cuan.serverside.service;

import com.cuan.serverside.model.JenisPinjaman;

public interface JenisPinjamanService {

    // Define GET all jenis pinjaman in service
    public Iterable<JenisPinjaman> getAllJenisPinjaman();

    // Define GET jenis pinjaman by id in service
    public JenisPinjaman getJenisPinjamanId(Long id);

    // Define POST jenis pinjaman in service
    public JenisPinjaman saveJenisPinjaman(JenisPinjaman jenisPinjaman);
}
