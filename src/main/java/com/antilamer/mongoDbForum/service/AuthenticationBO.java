package com.antilamer.mongoDbForum.service;

import com.antilamer.mongoDbForum.dto.RegistrationDTO;

public interface AuthenticationBO {

    void registerUser(RegistrationDTO registrationDTO);

}
