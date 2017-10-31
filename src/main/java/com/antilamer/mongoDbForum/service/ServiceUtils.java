package com.antilamer.mongoDbForum.service;

import com.antilamer.mongoDbForum.dto.PostDTO;
import com.antilamer.mongoDbForum.dto.UserDTO;
import com.antilamer.mongoDbForum.model.Post;
import com.antilamer.mongoDbForum.model.User;
import org.springframework.beans.BeanUtils;

import java.util.ArrayList;
import java.util.List;

public class ServiceUtils {

    public static List<PostDTO> convertPosts(List<Post> posts) {
        List<PostDTO> postDTOs = new ArrayList<>();

        posts.forEach(post -> {
            PostDTO postDTO = new PostDTO();
            BeanUtils.copyProperties(post, postDTO);
            postDTOs.add(postDTO);
        });

        return postDTOs;
    }

    public static void initUserDTO(UserDTO userDTO, User user) {
        userDTO.setId(user.getId());
        userDTO.setUsername(user.getUsername());
        userDTO.setFullName(user.getFullName());
        userDTO.setEmail(user.getEmail());
        userDTO.setRegistrationDate(user.getRegistrationDate());
    }
}
