package com.antilamer.mongoDbForum.controller;

import com.antilamer.mongoDbForum.dto.PostDTO;
import com.antilamer.mongoDbForum.service.DashboardBO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/dashboard")
public class DashboardController {

    @Autowired
    private DashboardBO dashboardBO;

    @RequestMapping(value = "/getPosts", method = RequestMethod.GET)
    public List<PostDTO> getPosts(@RequestParam Integer limit, @RequestParam Integer offset){
        return dashboardBO.getPosts(limit, offset);
    }

}
