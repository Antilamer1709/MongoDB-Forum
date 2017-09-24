package com.antilamer.mongoDbForum.service;

import com.antilamer.mongoDbForum.dto.PostDTO;

import java.util.List;

public interface DashboardBO {

    List<PostDTO> getPosts(Integer limit, Integer offset);

}
