package com.antilamer.mongoDbForum.controller;

import com.antilamer.mongoDbForum.dto.RegistrationDTO;
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
    @ResponseBody
    @ResponseStatus(value = HttpStatus.OK)
    public void updateComment(@RequestBody RegistrationDTO registrationDTO) {
        authenticationBO.registerUser(registrationDTO);
    }

}