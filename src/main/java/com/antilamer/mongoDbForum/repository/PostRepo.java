package com.antilamer.mongoDbForum.repository;

import com.antilamer.mongoDbForum.model.Post;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PostRepo extends MongoRepository<Post, String> {
}
