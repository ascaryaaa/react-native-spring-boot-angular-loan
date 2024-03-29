package com.cuan.serverside.repository;

import com.cuan.serverside.model.FormPengajuan;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FormPengajuanRepository extends CrudRepository<FormPengajuan, Long> {
    // public DetailPinjaman findByHashedIdPinjaman(String hashedId);
    public FormPengajuan findByHashedIdForm(String hashedId);

    // Define a method to find all FormPengajuan by User ID
    public Iterable<FormPengajuan> findByFormToUserIdUser(Long userId);

//    List<FormPengajuan> findFormByDeletedFalse();
}
