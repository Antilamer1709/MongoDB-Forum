package com.antilamer.mongoDbForum.service;

import com.antilamer.mongoDbForum.dto.CommentDTO;
import com.antilamer.mongoDbForum.dto.PostDTO;
import com.antilamer.mongoDbForum.dto.UserDTO;
import com.antilamer.mongoDbForum.model.User;
import com.antilamer.mongoDbForum.repository.CommentRepo;
import com.antilamer.mongoDbForum.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProfileBOImpl implements ProfileBO {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private CommentRepo commentRepo;

    @Autowired
    private PostBO postBO;

    @Override
    public List<PostDTO> getUsersPosts(String username, Integer limit, Integer offset) {
        User user = getUserByUsername(username);
        return postBO.getUsersPagedPosts(user.getId(), limit, offset);
    }

    private User getUserByUsername(String username) {
        User user = userRepo.findByUsername(username);
        if (user == null)
            throw new RuntimeException("User " + username + " does not exist!");
        return user;
    }

    @Override
    public List<CommentDTO> getUsersComments(String username, Integer limit, Integer offset) {
        User user = getUserByUsername(username);
        PageRequest pageRequest = new PageRequest(offset/limit, limit, new Sort(Sort.Direction.DESC, "modifiedDate"));
        return commentRepo.findByCreatorId(user.getId(), pageRequest)
                .map(CommentDTO::convertToDTO)
                .getContent();
    }

    @Override
    public UserDTO getUsersProfile(String username) {
        User user = getUserByUsername(username);
        UserDTO userDTO = new UserDTO();
        ServiceUtils.initUserDTO(userDTO, user);
        return userDTO;
    }
}
