package com.cuan.serverside.service;

import com.cuan.serverside.model.Cabang;
import com.cuan.serverside.repository.CabangRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service // Define Service Implementation
public class CabangServiceImpl implements CabangService{

    // Dependency Injection to prevent coupling
    @Autowired
    private CabangRepository cabangRepository;

    public CabangServiceImpl(CabangRepository cabangRepository) {

        this.cabangRepository = cabangRepository;
    }

    // Function overriding from interface
    @Override
    public Iterable<Cabang> getAllCabang() {

        return cabangRepository.findAll();
    }

    @Override
    public Cabang getCabangId(Long id) {

        return cabangRepository.findById(id).orElse(null);
    }

    @Override
    public Cabang saveCabang(Cabang cabang) {

        return cabangRepository.save(cabang);
    }

    @Override
    public List<Cabang> saveCabangs(List<Cabang> cabangs) {

        return (List<Cabang>) cabangRepository.saveAll(cabangs);

    }
}
