package com.cuan.serverside.controller;

import com.cuan.serverside.model.Account;
import com.cuan.serverside.model.Admin;
import com.cuan.serverside.model.User;
import com.cuan.serverside.model.request.AccountLoginReq;
import com.cuan.serverside.model.request.AdminLoginReq;
import com.cuan.serverside.model.response.LoginResponse;
import com.cuan.serverside.model.response.ErrorRes;
import com.cuan.serverside.repository.AccountRepository;
import com.cuan.serverside.repository.AdminRepository;
import com.cuan.serverside.repository.UserRepository;
import com.cuan.serverside.utils.JwtUtil;
import com.cuan.serverside.utils.CustomAuthenticationToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/rest/auth")
public class AuthController {

    private final AccountRepository accountRepository;
    private final AdminRepository adminRepository;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;

    @Autowired
    public AuthController(AccountRepository accountRepository, AdminRepository adminRepository, AuthenticationManager authenticationManager, JwtUtil jwtUtil) {
        this.accountRepository = accountRepository;
        this.adminRepository = adminRepository;
        this.authenticationManager = authenticationManager;
        this.jwtUtil = jwtUtil;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/login-admin")
    public ResponseEntity<?> loginAdmin(@RequestBody AdminLoginReq adminLoginReq) {
        try {
            CustomAuthenticationToken authToken = new CustomAuthenticationToken(
                    adminLoginReq.getUsername(), adminLoginReq.getPassword(), "ADMIN");
            Authentication authentication = authenticationManager.authenticate(authToken);

            // Ensure the user is authenticated as Admin before generating Admin token
            if (authentication.getAuthorities().contains(new SimpleGrantedAuthority("ROLE_ADMIN"))) {
                SecurityContextHolder.getContext().setAuthentication(authentication);

                final String token = jwtUtil.createToken(adminLoginReq.getUsername(), "ROLE_ADMIN");

                // Initialize which Admin from admin login request's username
                Admin admin = adminRepository.findByUsernameAdmin(adminLoginReq.getUsername());
                // Pass the admin and put get the Id in the response
                return ResponseEntity.ok(new LoginResponse(admin.getHashedIdAdmin(),adminLoginReq.getUsername(), token));
            } else {
                throw new BadCredentialsException("Invalid username or password");
            }
        } catch (BadCredentialsException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new ErrorRes(HttpStatus.UNAUTHORIZED, "Invalid username or password"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ErrorRes(HttpStatus.BAD_REQUEST, e.getMessage()));
        }
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/login-account")
//    @Scheduled(cron = )
    public ResponseEntity<?> loginAccount(@RequestBody AccountLoginReq accountLoginReq) {
        try {
            CustomAuthenticationToken authToken = new CustomAuthenticationToken(
                    accountLoginReq.getUsername(), accountLoginReq.getPassword(), "ACCOUNT");
            Authentication authentication = authenticationManager.authenticate(authToken);

            // Ensure the user is authenticated as Account before generating Account token
            if (authentication.getAuthorities().contains(new SimpleGrantedAuthority("ROLE_USER"))) {
                SecurityContextHolder.getContext().setAuthentication(authentication);

                final String token = jwtUtil.createToken(accountLoginReq.getUsername(), "ROLE_USER");

                // Initialize which Account from account login request's username
                Account account = accountRepository.findByUsernameAccount(accountLoginReq.getUsername());
                // Pass the account and put get the Id in the response
                return ResponseEntity.ok(new LoginResponse(account.getHashedIdAccount() ,accountLoginReq.getUsername(), token));
            } else {
                throw new BadCredentialsException("Invalid username or password");
            }
        } catch (BadCredentialsException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new ErrorRes(HttpStatus.UNAUTHORIZED, "Invalid username or password"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ErrorRes(HttpStatus.BAD_REQUEST, e.getMessage()));
        }
    }
}
