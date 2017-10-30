package com.antilamer.mongoDbForum.service;

import com.antilamer.mongoDbForum.dto.PostDTO;
import com.antilamer.mongoDbForum.model.Post;
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
}
