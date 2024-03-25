package com.cuan.serverside.repository;

import com.cuan.serverside.model.Account;
import com.cuan.serverside.model.Admin;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

// Initialize repository by extending functions to CrudRepository
@Repository
public interface AccountRepository extends CrudRepository<Account, Long> {
    public Account findByUsernameAccount(String username);
<<<<<<< HEAD

=======
>>>>>>> 75b4ed543b96d6a6c2c2dd26e6ccf2d12ad2c697
    public Account findByHashedIdAccount(String hashedId);
}
