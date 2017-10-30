package com.antilamer.mongoDbForum.repository;

import com.antilamer.mongoDbForum.model.Comment;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CommentRepo extends MongoRepository<Comment, String> {
}
