package com.cuan.serverside.service;

import com.cuan.serverside.model.JenisPinjaman;
import com.cuan.serverside.repository.JenisPinjamanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class JenisPinjamanServiceImpl implements JenisPinjamanService {

    // Dependency Injection to prevent coupling
    @Autowired
    private JenisPinjamanRepository jenisPinjamanRepository;

    public JenisPinjamanServiceImpl(JenisPinjamanRepository jenisPinjamanRepository) {

        this.jenisPinjamanRepository = jenisPinjamanRepository;
    }

    // Function overriding from interface
    @Override
    public Iterable<JenisPinjaman> getAllJenisPinjaman() {

        return jenisPinjamanRepository.findAll();
    }

    @Override
    public JenisPinjaman getJenisPinjamanId(Long id) {

        return jenisPinjamanRepository.findById(id).orElse(null);
    }

    @Override
    public JenisPinjaman saveJenisPinjaman(JenisPinjaman jenisPinjaman) {
        return jenisPinjamanRepository.save(jenisPinjaman);
    }
}
