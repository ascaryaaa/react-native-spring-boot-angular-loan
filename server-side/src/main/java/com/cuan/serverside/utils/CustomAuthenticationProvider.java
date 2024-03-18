package com.cuan.serverside.utils;

import com.cuan.serverside.model.Account;
import com.cuan.serverside.model.Admin;
import com.cuan.serverside.service.AccountService;
import com.cuan.serverside.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Collections;
import java.util.List;

@Component
public class CustomAuthenticationProvider implements AuthenticationProvider {
    @Autowired
    private AdminService adminService;
    @Autowired
    private AccountService accountService;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        CustomAuthenticationToken customToken = (CustomAuthenticationToken) authentication;
        String username = customToken.getName();
        String password = customToken.getCredentials().toString();
        String userType = customToken.getUserType();

        if ("ADMIN".equals(userType)) {
            Admin admin = adminService.findByUsernameAdmin(username)
                    .orElseThrow(() -> new UsernameNotFoundException("Admin user not found: " + username));
            if (!passwordMatches(password, admin.getPasswordAdmin())) {
                throw new BadCredentialsException("Authentication failed");
            }
            return new UsernamePasswordAuthenticationToken(username, password, getAuthorities("ROLE_ADMIN"));
        } else if ("ACCOUNT".equals(userType)) {
            Account account = accountService.findByUsernameAccount(username)
                    .orElseThrow(() -> new UsernameNotFoundException("Account user not found: " + username));
            if (!passwordMatches(password, account.getPasswordAccount())) {
                throw new BadCredentialsException("Authentication failed");
            }
            return new UsernamePasswordAuthenticationToken(username, password, getAuthorities("ROLE_USER"));
        }

        throw new IllegalArgumentException("Unrecognized user type: " + userType);
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return CustomAuthenticationToken.class.isAssignableFrom(authentication);
    }

    private boolean passwordMatches(String rawPassword, String encodedPassword) {
        return passwordEncoder.matches(rawPassword, encodedPassword);
    }

    private List<GrantedAuthority> getAuthorities(String role) {
        return Collections.singletonList(new SimpleGrantedAuthority(role));
    }
}