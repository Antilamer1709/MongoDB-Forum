package com.antilamer.mongoDbForum.service;

import com.antilamer.mongoDbForum.dto.PostDTO;
import com.antilamer.mongoDbForum.exeption.ValidationExeption;
import com.antilamer.mongoDbForum.model.Post;
import com.antilamer.mongoDbForum.repository.PostRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class PostBOImpl implements PostBO {

    @Autowired
    PostRepo postRepo;

    @Autowired
    AuthenticationBO authenticationBO;

    @Override
    public void savePost(PostDTO postDTO) {
        Post post = new Post();
        validatePost(postDTO);
        initPost(post, postDTO);
        postRepo.save(post);
    }

    private void validatePost(PostDTO postDTO) {
        if (!postDTO.isValid()) {
            throw new ValidationExeption("Post not valid!");
        }
    }

    private void initPost(Post post, PostDTO postDTO) {
        if (postDTO.getId() != null) {
            post.setId(postDTO.getId());
        }
        post.setHeader(postDTO.getHeader());
        post.setContent(postDTO.getContent());
        if (postDTO.getImageId() != null) {
            post.setImageId(postDTO.getImageId());
        }
        post.setCreatedDate(new Date());
        post.setCreator(authenticationBO.getLoggedUser());
    }
}
