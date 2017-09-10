package com.antilamer.mongoDbForum.controller;

import com.antilamer.mongoDbForum.dto.HelloDTO;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DashboardController {

    @RequestMapping(value = "hello", method = RequestMethod.GET)
    public HelloDTO helloWorld(){
        HelloDTO helloDTO = new HelloDTO();
        helloDTO.setHello("Hello World!!");
        return helloDTO;
    }

}
