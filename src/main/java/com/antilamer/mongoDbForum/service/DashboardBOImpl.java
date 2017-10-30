package com.antilamer.mongoDbForum.service;

import com.antilamer.mongoDbForum.dto.PostDTO;
import com.antilamer.mongoDbForum.model.Post;
import com.antilamer.mongoDbForum.repository.PostRepo;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DashboardBOImpl implements DashboardBO{

    @Autowired
    private PostRepo postRepo;

    @Override
    public List<PostDTO> getPosts(Integer limit, Integer offset) {
        PageRequest pageRequest = new PageRequest(offset/limit, limit, new Sort(Sort.Direction.DESC, "modifiedDate"));
        List<Post> posts = postRepo.findAll(pageRequest).getContent();
        return ServiceUtils.convertPosts(posts);
    }

}
