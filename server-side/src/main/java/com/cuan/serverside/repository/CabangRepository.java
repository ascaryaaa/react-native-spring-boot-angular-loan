package com.cuan.serverside.repository;

import com.cuan.serverside.model.Cabang;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

// Initialize repository by extending functions to CrudRepository
@Repository
public interface CabangRepository extends CrudRepository<Cabang, Long> {
}
