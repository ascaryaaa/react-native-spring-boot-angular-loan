package com.cuan.serverside.repository;

import com.cuan.serverside.model.DetailPinjaman;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DetailPinjamanRepository extends CrudRepository<DetailPinjaman, Long> {
}
