package com.antilamer.mongoDbForum.controller;

import com.antilamer.mongoDbForum.dto.RegistrationDTO;
import com.antilamer.mongoDbForum.dto.UserDTO;
import com.antilamer.mongoDbForum.service.AuthenticationBO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/authentication")
public class AuthenticationController {

    @Autowired
    private AuthenticationBO authenticationBO;

    @RequestMapping(value = "/registration", method = RequestMethod.POST)
    @ResponseStatus(value = HttpStatus.OK)
    public void registration(@RequestBody RegistrationDTO registrationDTO) {
        authenticationBO.registerUser(registrationDTO);
    }

    @RequestMapping(value = "/loggedUser", method = RequestMethod.POST)
    public UserDTO loggedUser() throws Exception {
        return authenticationBO.getLoggedUserDTO();
    }

}
