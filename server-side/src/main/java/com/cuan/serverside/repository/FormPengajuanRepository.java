package com.cuan.serverside.repository;

import com.cuan.serverside.model.FormPengajuan;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FormPengajuanRepository extends CrudRepository<FormPengajuan, Long> {
}
