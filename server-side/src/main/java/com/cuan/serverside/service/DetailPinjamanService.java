package com.cuan.serverside.service;

import com.cuan.serverside.model.DetailPinjaman;

public interface DetailPinjamanService {
    // Define GET all form pengajuan in service
    public Iterable<DetailPinjaman> getAllDetailPinjaman();

    // Define GET form pengajuan by id in service
    public DetailPinjaman getDetailPinjamanId(Long id);

    // Define POST form pengajuan in service
    public DetailPinjaman saveDetailPinjaman(DetailPinjaman detailPinjaman);

    // Define DELETE form pengajuan by id in service
    public void deleteDetailPinjamanById(Long id);
}
