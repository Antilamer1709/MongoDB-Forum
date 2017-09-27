package com.antilamer.mongoDbForum.service;

import com.antilamer.mongoDbForum.dto.PostDTO;

public interface PostBO {

    void savePost(PostDTO postDTO);

    PostDTO getPost(String id);

}
