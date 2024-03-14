package com.cuan.serverside.service;

import com.cuan.serverside.model.Cabang;

import java.util.List;

public interface CabangService {
    public Iterable<Cabang> getAllCabang();

    // Define GET cabang by id in service
    public Cabang getCabangId(Long id);

    // Define POST cabang in service
    public Cabang saveCabang(Cabang cabang);

    // Define POST array of cabang in service
    List<Cabang> saveCabangs(List<Cabang> cabangs);
}
