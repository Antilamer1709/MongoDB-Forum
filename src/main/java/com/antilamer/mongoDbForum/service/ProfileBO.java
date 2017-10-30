package com.antilamer.mongoDbForum.service;

import com.antilamer.mongoDbForum.dto.CommentDTO;
import com.antilamer.mongoDbForum.dto.PostDTO;

import java.util.List;

public interface ProfileBO {

    List<PostDTO> getUsersPosts(String username, Integer limit, Integer offset);

    List<CommentDTO> getUsersComments(String username, Integer limit, Integer offset);

}
