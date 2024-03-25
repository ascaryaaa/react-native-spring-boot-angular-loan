package com.cuan.serverside.repository;

import com.cuan.serverside.model.DetailPinjaman;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

// Initialize repository by extending functions to CrudRepository
@Repository
public interface DetailPinjamanRepository extends CrudRepository<DetailPinjaman, Long> {
    // public Admin findByHashedIdAdmin(String hashedId);
    public DetailPinjaman findByHashedIdPinjaman(String hashedId);
}
