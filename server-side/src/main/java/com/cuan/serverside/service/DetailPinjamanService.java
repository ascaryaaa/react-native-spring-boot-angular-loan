package com.cuan.serverside.service;

import com.cuan.serverside.model.DetailPinjaman;

public interface DetailPinjamanService {
    // Define GET all detail pinjaman in service
    public Iterable<DetailPinjaman> getAllDetailPinjaman();

    // Define GET detail pinjaman by id in service
    public DetailPinjaman getDetailPinjamanId(Long id);

    // Define GET detail pinjaman by hashed id in service
    public DetailPinjaman getDetailPinjamanByHashedId(String hashedId);

    // Define POST detail pinjaman in service
    public DetailPinjaman saveDetailPinjaman(DetailPinjaman detailPinjaman);

    // Define DELETE detail pinjaman by id in service
    public void deleteDetailPinjamanById(Long id);

    // Define Soft Delete status in form service
    public void softDeleteById(Long id);
}
