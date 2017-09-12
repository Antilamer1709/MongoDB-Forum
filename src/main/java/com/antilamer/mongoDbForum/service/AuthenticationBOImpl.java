package com.antilamer.mongoDbForum.service;

import com.antilamer.mongoDbForum.dto.RegistrationDTO;
import com.antilamer.mongoDbForum.exeption.ValidationExeption;
import com.antilamer.mongoDbForum.model.User;
import com.antilamer.mongoDbForum.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
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
    }

    private void initUser(User user, RegistrationDTO registrationDTO) {
        user.setFullName(registrationDTO.getFullName());
        user.setUsername(registrationDTO.getUsername());
        user.setEmail(registrationDTO.getEmail());
        user.setPassword(registrationDTO.getPassword()); //TODO implement encoding!
        user.setRegistrationDate(new Date());
    }
}