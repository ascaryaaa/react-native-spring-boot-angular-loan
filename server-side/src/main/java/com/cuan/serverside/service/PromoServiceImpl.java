package com.cuan.serverside.service;

import com.cuan.serverside.model.Promo;
import com.cuan.serverside.repository.PromoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PromoServiceImpl implements PromoService{

    // Dependency Injection to prevent coupling
    @Autowired
    private PromoRepository promoRepository;

    public PromoServiceImpl(PromoRepository promoRepository) {

        this.promoRepository = promoRepository;
    }

    // Function overriding from interface
    @Override
    public Iterable<Promo> getAllPromo() {

        return promoRepository.findAll();
    }

    @Override
    public Promo getPromoId(Long id) {

        return promoRepository.findById(id).orElse(null);
    }

    @Override
    public Promo savePromo(Promo promo) {

        return promoRepository.save(promo);
    }
}
