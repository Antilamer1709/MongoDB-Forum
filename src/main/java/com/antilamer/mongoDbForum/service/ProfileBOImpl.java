package com.antilamer.mongoDbForum.service;

import com.antilamer.mongoDbForum.dto.PostDTO;
import com.antilamer.mongoDbForum.model.User;
import com.antilamer.mongoDbForum.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProfileBOImpl implements ProfileBO {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private PostBO postBO;

    @Override
    public List<PostDTO> getUsersPosts(String username, Integer limit, Integer offset) {
        User user = userRepo.findByUsername(username);
        if (user == null)
            throw new RuntimeException("User " + username + " does not exist!");

        return postBO.getUsersPagedPosts(user.getId(), limit, offset);
    }
}
