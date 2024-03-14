package com.cuan.serverside.service;

import com.cuan.serverside.model.DetailPinjaman;
import com.cuan.serverside.repository.DetailPinjamanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DetailPinjamanServiceImpl implements DetailPinjamanService{
    @Autowired
    private DetailPinjamanRepository detailPinjamanRepository;
    public DetailPinjamanServiceImpl(DetailPinjamanRepository detailPinjamanRepository) {

        this.detailPinjamanRepository = detailPinjamanRepository;
    }

    @Override
    public Iterable<DetailPinjaman> getAllDetailPinjaman() {
        return detailPinjamanRepository.findAll();
    }

    @Override
    public DetailPinjaman getDetailPinjamanId(Long id) {
        return detailPinjamanRepository.findById(id).orElse(null);
    }

    @Override
    public DetailPinjaman saveDetailPinjaman(DetailPinjaman detailPinjaman) {
        return detailPinjamanRepository.save(detailPinjaman);
    }

    @Override
    public void deleteDetailPinjamanById(Long id) {
        detailPinjamanRepository.deleteById(id);
    }
}
