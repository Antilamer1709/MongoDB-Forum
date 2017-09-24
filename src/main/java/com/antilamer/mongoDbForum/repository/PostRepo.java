package com.antilamer.mongoDbForum.repository;

import com.antilamer.mongoDbForum.model.Post;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PostRepo extends MongoRepository<Post, String> {

    Page<Post> findAll(Pageable pageable);

}
