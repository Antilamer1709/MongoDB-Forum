package com.antilamer.mongoDbForum.service;

import com.antilamer.mongoDbForum.dto.PostDTO;

import java.util.List;

public interface PostBO {

    void savePost(PostDTO postDTO);

    PostDTO getPost(String id);

    void addComment(PostDTO postDTO);

    List<PostDTO> getUsersPagedPosts(String userId, Integer limit, Integer offset);

}
