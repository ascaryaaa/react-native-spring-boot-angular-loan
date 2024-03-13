package com.cuan.serverside.repository;

import com.cuan.serverside.model.Cabang;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CabangRepository extends CrudRepository<Cabang, Long> {
}
