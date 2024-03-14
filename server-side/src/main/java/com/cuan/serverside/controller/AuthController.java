package com.cuan.serverside.controller;

import com.cuan.serverside.model.Account;
import com.cuan.serverside.model.request.AccountLoginReq;
import com.cuan.serverside.utils.JwtUtil;
import com.cuan.serverside.model.Admin;
import com.cuan.serverside.model.request.AdminLoginReq;
import com.cuan.serverside.model.response.ErrorRes;
import com.cuan.serverside.model.response.AdminLoginRes;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/rest/auth")
public class AuthController {

    private final AuthenticationManager authenticationManager;


    private JwtUtil jwtUtil;
    public AuthController(AuthenticationManager authenticationManager, JwtUtil jwtUtil) {
        this.authenticationManager = authenticationManager;
        this.jwtUtil = jwtUtil;

    }
    @CrossOrigin(origins = "http://localhost:4200")
    @ResponseBody
    @RequestMapping(value = "/login-admin",method = RequestMethod.POST)
    public ResponseEntity loginAdmin(@RequestBody AdminLoginReq AdminLoginReq)  {

        try {
            Authentication authentication =
                    authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(AdminLoginReq.getUsername(), AdminLoginReq.getPassword()));
            String username = authentication.getName();
            Admin admin = new Admin(username, AdminLoginReq.getPassword());
            String token = jwtUtil.createTokenAdmin(admin);
            AdminLoginRes adminLoginRes = new AdminLoginRes(username,token);

            return ResponseEntity.ok(adminLoginRes);

        }catch (BadCredentialsException e){
            ErrorRes errorResponse = new ErrorRes(HttpStatus.BAD_REQUEST,"Invalid username or password");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        }catch (Exception e){
            ErrorRes errorResponse = new ErrorRes(HttpStatus.BAD_REQUEST, e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        }
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @ResponseBody
    @RequestMapping(value = "/login-account",method = RequestMethod.POST)
    public ResponseEntity loginAccount(@RequestBody AccountLoginReq accountLoginReq)  {

        try {
            Authentication authentication =
                    authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(accountLoginReq.getUsername(), accountLoginReq.getPassword()));
            String username = authentication.getName();
            Account account = new Account(username, accountLoginReq.getPassword());
            String token = jwtUtil.createTokenAccount(account);
            AdminLoginRes adminLoginRes = new AdminLoginRes(username,token);

            return ResponseEntity.ok(adminLoginRes);

        }catch (BadCredentialsException e){
            ErrorRes errorResponse = new ErrorRes(HttpStatus.BAD_REQUEST,"Invalid username or password");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        }catch (Exception e){
            ErrorRes errorResponse = new ErrorRes(HttpStatus.BAD_REQUEST, e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        }
    }
}
