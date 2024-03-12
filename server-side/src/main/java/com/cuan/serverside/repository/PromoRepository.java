package com.cuan.serverside.repository;

import com.cuan.serverside.model.Admin;
import com.cuan.serverside.model.Promo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PromoRepository extends CrudRepository<Promo, Long> {
}
