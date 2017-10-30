package com.antilamer.mongoDbForum.controller;

import com.antilamer.mongoDbForum.dto.PostDTO;
import com.antilamer.mongoDbForum.service.ProfileBO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/profile")
public class ProfileController {

    @Autowired
    private ProfileBO profileBO;

    @RequestMapping(value = "/posts/{username}", method = RequestMethod.GET)
    public List<PostDTO> getUsersPosts(@PathVariable String username, @RequestParam Integer limit, @RequestParam Integer offset){
        return profileBO.getUsersPosts(username, limit, offset);
    }
}
