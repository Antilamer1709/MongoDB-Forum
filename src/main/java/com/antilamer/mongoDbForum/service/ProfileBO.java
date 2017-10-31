package com.antilamer.mongoDbForum.service;

import com.antilamer.mongoDbForum.dto.CommentDTO;
import com.antilamer.mongoDbForum.dto.PostDTO;
import com.antilamer.mongoDbForum.dto.UserDTO;

import java.util.List;

public interface ProfileBO {

    List<PostDTO> getUsersPosts(String username, Integer limit, Integer offset);

    List<CommentDTO> getUsersComments(String username, Integer limit, Integer offset);

    UserDTO getUsersProfile(String username);

}
