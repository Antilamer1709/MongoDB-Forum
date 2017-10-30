package com.antilamer.mongoDbForum.repository;

import com.antilamer.mongoDbForum.model.Comment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface CommentRepo extends MongoRepository<Comment, String> {

    @Query(value="{ 'user.id' : ?0 }")
    Page<Comment> findByCreatorId(String creatorId, Pageable pageable);

}
