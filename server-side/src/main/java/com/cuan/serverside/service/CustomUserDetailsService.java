package com.cuan.serverside.service;

import com.cuan.serverside.model.Account;
import com.cuan.serverside.model.Admin;
import com.cuan.serverside.repository.AccountRepository;
import com.cuan.serverside.repository.AdminRepository;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final AdminRepository adminRepository;
    private final AccountRepository accountRepository;

    public CustomUserDetailsService(AdminRepository adminRepository, AccountRepository accountRepository) {
        this.adminRepository = adminRepository;
        this.accountRepository = accountRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // Check if it's an admin
        Admin admin = adminRepository.findByUsernameAdmin(username);
        if (admin != null) {
            List<String> roles = new ArrayList<>();
            roles.add("ADMIN"); // Assign appropriate roles for admin
            return User.builder()
                    .username(admin.getUsernameAdmin())
                    .password(admin.getPasswordAdmin())
                    .roles(roles.toArray(new String[0]))
                    .build();
        }

        // If not an admin, check if it's an account
        Account account = accountRepository.findByUsernameAccount(username);
        if (account != null) {
            List<String> roles = new ArrayList<>();
            roles.add("USER"); // Assign appropriate roles for account
            return User.builder()
                    .username(account.getUsernameAccount())
                    .password(account.getPasswordAccount())
                    .roles(roles.toArray(new String[0]))
                    .build();
        }

        // If neither admin nor account found, throw exception
        throw new UsernameNotFoundException("User not found with username: " + username);
    }
}