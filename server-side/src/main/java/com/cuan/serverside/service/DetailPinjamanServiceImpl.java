package com.cuan.serverside.service;

import com.cuan.serverside.model.DetailPinjaman;
import com.cuan.serverside.model.FormPengajuan;
import com.cuan.serverside.model.User;
import com.cuan.serverside.repository.DetailPinjamanRepository;
import com.cuan.serverside.repository.FormPengajuanRepository;
import com.cuan.serverside.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service // Define Service Implementation
public class DetailPinjamanServiceImpl implements DetailPinjamanService{
    // Dependency Injection to prevent coupling
    @Autowired
    private DetailPinjamanRepository detailPinjamanRepository;
    @Autowired
    private FormPengajuanRepository formPengajuanRepository;
    @Autowired
    private UserRepository userRepository;
    public DetailPinjamanServiceImpl(DetailPinjamanRepository detailPinjamanRepository, FormPengajuanRepository formPengajuanRepository, UserRepository userRepository) {

        this.detailPinjamanRepository = detailPinjamanRepository;
        this.formPengajuanRepository = formPengajuanRepository;
        this.userRepository = userRepository;
    }

    // Function overriding from interface
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
        Long idForm = detailPinjaman.getPinjamanToForm().getIdFormPengajuanPinjaman();
        FormPengajuan formPengajuan = formPengajuanRepository.findById(idForm).orElse(null);
        Long idUser = formPengajuan.getFormToUser().getIdUser();
        User user = userRepository.findById(idUser).orElse(null);

        detailPinjaman.setNameUser(user.getNameUser());
        detailPinjaman.setNikUser(user.getNikUser());
        return detailPinjamanRepository.save(detailPinjaman);
    }

    @Override
    public void deleteDetailPinjamanById(Long id) {
        detailPinjamanRepository.deleteById(id);
    }
}
