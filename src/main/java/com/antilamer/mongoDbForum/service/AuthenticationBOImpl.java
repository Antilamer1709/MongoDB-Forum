package com.antilamer.mongoDbForum.service;

import com.antilamer.mongoDbForum.dto.RegistrationDTO;
import com.antilamer.mongoDbForum.dto.UserDTO;
import com.antilamer.mongoDbForum.exeption.ValidationExeption;
import com.antilamer.mongoDbForum.model.User;
import com.antilamer.mongoDbForum.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;

@Service
public class AuthenticationBOImpl implements AuthenticationBO {

    @Autowired
    private UserRepo userRepo;

    @Override
    @Transactional
    public void registerUser(RegistrationDTO registrationDTO) {
        validateRegistration(registrationDTO);
        User user = new User();
        initUser(user, registrationDTO);
        userRepo.save(user);
    }

    private void validateRegistration(RegistrationDTO registrationDTO) {
        if (registrationDTO.hasNullFields() || registrationDTO.hasEmptyFields()) {
            throw new ValidationExeption("Registration object is not valid!");
        }
        User user = userRepo.findByUsernameIgnoreCase(registrationDTO.getUsername());
        if (user != null) {
            throw new ValidationExeption("User with the same username is already registered!");
        }
    }

    private void initUser(User user, RegistrationDTO registrationDTO) {
        user.setFullName(registrationDTO.getFullName());
        user.setUsername(registrationDTO.getUsername());
        user.setEmail(registrationDTO.getEmail());
        user.setPassword(registrationDTO.getPassword()); //TODO implement encoding!
        user.setRegistrationDate(new Date());
    }

    @Override
    public User getLoggedUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        for (GrantedAuthority authority : authentication.getAuthorities()) {
            if (authority.getAuthority().equals("ROLE_ANONYMOUS")) {
                return null;
            }
        }
        return (User) authentication.getPrincipal();
    }

    @Override
    public UserDTO getLoggedUserDTO() {
        User user = getLoggedUser();
        UserDTO userDTO = new UserDTO();
        if (user != null) {
            ServiceUtils.initUserDTO(userDTO, user);
        }
        return userDTO;
    }
}
