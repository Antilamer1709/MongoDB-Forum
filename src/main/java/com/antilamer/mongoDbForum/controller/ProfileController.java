package com.antilamer.mongoDbForum.controller;

import com.antilamer.mongoDbForum.dto.CommentDTO;
import com.antilamer.mongoDbForum.dto.PostDTO;
import com.antilamer.mongoDbForum.dto.UserDTO;
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

    @RequestMapping(value = "/comments/{username}", method = RequestMethod.GET)
    public List<CommentDTO> getUsersComments(@PathVariable String username, @RequestParam Integer limit, @RequestParam Integer offset){
        return profileBO.getUsersComments(username, limit, offset);
    }

    @RequestMapping(value = "/profile/{username}", method = RequestMethod.GET)
    public UserDTO getUsersComments(@PathVariable String username){
        return profileBO.getUsersProfile(username);
    }
}
