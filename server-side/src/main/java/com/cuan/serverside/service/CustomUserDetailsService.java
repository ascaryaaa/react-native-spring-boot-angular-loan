package com.cuan.serverside.service;

import com.cuan.serverside.model.Account;
import com.cuan.serverside.model.Admin;
import com.cuan.serverside.repository.AccountRepository;
import com.cuan.serverside.repository.AdminRepository;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final AdminRepository adminRepository;
    private final AccountRepository accountRepository;

    @Autowired
    public CustomUserDetailsService(AdminRepository adminRepository, AccountRepository accountRepository) {
        this.adminRepository = adminRepository;
        this.accountRepository = accountRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // Attempt to authenticate as Admin
        Admin admin = adminRepository.findByUsernameAdmin(username);
        if (admin != null) {
            return User.builder()
                    .username(admin.getUsernameAdmin())
                    .password(admin.getPasswordAdmin())
                    .authorities("ROLE_ADMIN") // Ensure these authorities align with your security configuration
                    .build();
        }

        // If not an Admin, attempt to authenticate as Account
        Account account = accountRepository.findByUsernameAccount(username);
        if (account != null) {
            return User.builder()
                    .username(account.getUsernameAccount())
                    .password(account.getPasswordAccount())
                    .authorities("ROLE_USER") // Ensure these authorities align with your security configuration
                    .build();
        }

        throw new UsernameNotFoundException("User not found with username: " + username);
    }
}
