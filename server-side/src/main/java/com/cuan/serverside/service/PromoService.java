package com.cuan.serverside.service;

import com.cuan.serverside.model.Promo;

public interface PromoService {
    public Iterable<Promo> getAllPromo();

    // Define GET users by id in service
    public Promo getPromoId(Long id);

    // Define POST user in service
    public Promo savePromo(Promo promo);
}
