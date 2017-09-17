package com.antilamer.mongoDbForum.dto;

import java.io.Serializable;

public class RegistrationDTO implements Serializable {

    private String username;

    private String fullName;

    private String email;

    private String password;

    private String confirmPassword;


    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getConfirmPassword() {
        return confirmPassword;
    }

    public void setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;
    }

    public boolean hasNullFields() {
        return username == null || fullName == null || email == null || password == null || confirmPassword == null;
    }

    public boolean hasEmptyFields() {
        return username.isEmpty() || fullName.isEmpty() || email.isEmpty() || password.isEmpty()
                || confirmPassword.isEmpty();
    }
}
