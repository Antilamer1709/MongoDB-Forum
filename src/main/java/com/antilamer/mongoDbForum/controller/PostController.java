package com.antilamer.mongoDbForum.controller;

import com.antilamer.mongoDbForum.dto.PostDTO;
import com.antilamer.mongoDbForum.service.PostBO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/post")
public class PostController {

    @Autowired
    PostBO postBO;

    @RequestMapping(value = "/save", method = RequestMethod.POST)
    @ResponseStatus(value = HttpStatus.OK)
    public void savePost(@RequestBody PostDTO postDTO) {
        postBO.savePost(postDTO);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.GET)
    public PostDTO getPost(@PathVariable String id){
        return postBO.getPost(id);
    }

    @RequestMapping(value = "/addComment", method = RequestMethod.POST)
    @ResponseStatus(value = HttpStatus.OK)
    public void addComment(@RequestBody PostDTO postDTO) {
        postBO.addComment(postDTO);
    }

}
