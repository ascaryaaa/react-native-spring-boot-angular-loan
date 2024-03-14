package com.cuan.serverside.repository;

import com.cuan.serverside.model.JenisPinjaman;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

// Initialize repository by extending functions to CrudRepository
@Repository
public interface JenisPinjamanRepository extends CrudRepository<JenisPinjaman, Long> {
}
