package com.cuan.serverside.service;

import com.cuan.serverside.model.Promo;

public interface PromoService {
    // Define GET all promos in service
    public Iterable<Promo> getAllPromo();

    // Define GET promos by id in service
    public Promo getPromoId(Long id);

    // Define POST promos in service
    public Promo savePromo(Promo promo);
}
