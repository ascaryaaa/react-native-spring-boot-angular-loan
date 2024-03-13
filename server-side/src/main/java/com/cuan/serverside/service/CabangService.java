package com.cuan.serverside.service;

import com.cuan.serverside.model.Cabang;

import java.util.List;

public interface CabangService {
    public Iterable<Cabang> getAllCabang();

    // Define GET users by id in service
    public Cabang getCabangId(Long id);

    // Define POST user in service
    public Cabang saveCabang(Cabang cabang);

    List<Cabang> saveCabangs(List<Cabang> cabangs);
}
