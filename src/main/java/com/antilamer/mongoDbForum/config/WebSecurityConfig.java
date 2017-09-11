package com.antilamer.mongoDbForum.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring().
                antMatchers(HttpMethod.OPTIONS, "/**").
                antMatchers("/").
                antMatchers("/*.{js,html}").
                antMatchers("/img/**").
                antMatchers("/fonts/**").
                antMatchers("/css/**").
                antMatchers("/404.html").
                antMatchers("/js/**").
                antMatchers("/node_modules/**").
                antMatchers("/**/*.{js,html,css}");

        web.ignoring().antMatchers( "/", "/resources/**", "/index.*", "/login.html","/favicon.ico",
                "/template/**", "/assets", "/assets/**", "/node_modules", "/node_modules/**", "/dist", "/dist/**",
                "/*.ttf", "/*.woff2", "/dashboard", "/dashboard/**", "/authentication/**", "/authentication/login",
                "/authentication/registration");
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .authorizeRequests()
                .antMatchers("/authentication/**").permitAll()
                .antMatchers("/index").permitAll()
                .anyRequest().authenticated()
                .and()
                .formLogin()
                .loginPage("/authentication/login")
                .defaultSuccessUrl("/")
                .usernameParameter("username").passwordParameter("password")
                .permitAll()
                .and()
                .logout()
                .logoutSuccessUrl("/")
                .permitAll();
        http.csrf().disable();
    }
}