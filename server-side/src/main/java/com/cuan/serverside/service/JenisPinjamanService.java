package com.cuan.serverside.service;

import com.cuan.serverside.model.JenisPinjaman;

public interface JenisPinjamanService {
    public Iterable<JenisPinjaman> getAllJenisPinjaman();

    // Define GET jenisPinjaman by id in service
    public JenisPinjaman getJenisPinjamanId(Long id);

    // Define POST jenisPinjaman in service
    public JenisPinjaman saveJenisPinjaman(JenisPinjaman jenisPinjaman);
}
