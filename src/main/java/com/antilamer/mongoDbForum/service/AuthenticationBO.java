package com.antilamer.mongoDbForum.service;

import com.antilamer.mongoDbForum.dto.RegistrationDTO;
import com.antilamer.mongoDbForum.model.User;

public interface AuthenticationBO {

    void registerUser(RegistrationDTO registrationDTO);

    User getLoggedUser();

}
