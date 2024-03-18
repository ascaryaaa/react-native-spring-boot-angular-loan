package com.cuan.serverside.config;


import com.cuan.serverside.service.CustomUserDetailsService;
import com.cuan.serverside.utils.JwtAuthorizationFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig  {

    private final CustomUserDetailsService userDetailsService;
    private final JwtAuthorizationFilter jwtAuthorizationFilter;

    public SecurityConfig(CustomUserDetailsService customUserDetailsService, JwtAuthorizationFilter jwtAuthorizationFilter) {
        this.userDetailsService = customUserDetailsService;
        this.jwtAuthorizationFilter = jwtAuthorizationFilter;

    }
    @Bean
    public AuthenticationManager authenticationManager(HttpSecurity http, NoOpPasswordEncoder noOpPasswordEncoder)
            throws Exception {
        AuthenticationManagerBuilder authenticationManagerBuilder = http.getSharedObject(AuthenticationManagerBuilder.class);
        authenticationManagerBuilder.userDetailsService(userDetailsService).passwordEncoder(noOpPasswordEncoder);
        return authenticationManagerBuilder.build();
    }


    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http.csrf().disable()
                .authorizeRequests()
                .requestMatchers("/rest/auth/**").permitAll()
                .requestMatchers("/loan/v1/promo/get-promos").permitAll() //Tambah path yang mau di permit
                .requestMatchers("/loan/v1/cabang/get-cabangs").permitAll() //Tambah path yang mau di permit
                .requestMatchers("loan/v1/jenis-pinjaman/get-jenis-pinjamans").permitAll()
                .requestMatchers("loan/v1/account/get-accounts").permitAll()
                .requestMatchers("loan/v1/account/post-account").permitAll()
                .requestMatchers("loan/v1/admin/post-admin").permitAll()
                .requestMatchers("loan/v1/admin/get-admins").permitAll()
                .requestMatchers("loan/v1/user/post-user").permitAll()
                .requestMatchers("loan/v1/user/get-users").permitAll()
                .requestMatchers("loan/v1/pinjaman/get-pinjamans").permitAll()
                .requestMatchers("loan/v1/pinjaman/post-pinjaman").permitAll()
                .requestMatchers("loan/v1/form/get-form").permitAll()
                .requestMatchers("loan/v1/form/post-form").permitAll()
                .requestMatchers("loan/v1/jenis-pinjaman/post-jenis-pinjaman").permitAll()
                .anyRequest().authenticated()
                .and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and().addFilterBefore(jwtAuthorizationFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @SuppressWarnings("deprecation")
    @Bean
    public NoOpPasswordEncoder passwordEncoder() {
        return (NoOpPasswordEncoder) NoOpPasswordEncoder.getInstance();
    }

}