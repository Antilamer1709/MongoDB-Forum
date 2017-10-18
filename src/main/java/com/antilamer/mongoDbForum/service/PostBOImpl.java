package com.antilamer.mongoDbForum.service;

import com.antilamer.mongoDbForum.dto.PostDTO;
import com.antilamer.mongoDbForum.dto.UserDTO;
import com.antilamer.mongoDbForum.exeption.ValidationExeption;
import com.antilamer.mongoDbForum.model.Comment;
import com.antilamer.mongoDbForum.model.Post;
import com.antilamer.mongoDbForum.repository.PostRepo;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
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

    @Override
    public PostDTO getPost(String id) {
        Post post = postRepo.findOne(id);
        if (post == null) {
            throw new RuntimeException("Post with id " + id + " does not exist!");
        }
        PostDTO postDTO = new PostDTO();
        postDTO.setCreator(new UserDTO());
        BeanUtils.copyProperties(post, postDTO);
        BeanUtils.copyProperties(post.getCreator(), postDTO.getCreator());
        return postDTO;
    }

    @Override
    @Transactional
    public void addComment(PostDTO postDTO) {
        Post post = postRepo.findOne(postDTO.getId());
        Comment newCommnet = new Comment(postDTO.getNewComment(), authenticationBO.getLoggedUser());
        if (post.getComments() == null) {
            post.setComments(new ArrayList<>());
        }
        post.getComments().add(newCommnet);
        post.setModifiedDate(new Date());
        postRepo.save(post);
    }
}
