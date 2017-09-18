package com.antilamer.mongoDbForum.repository;

import com.antilamer.mongoDbForum.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepo extends MongoRepository<User, String> {

    User findByUsername(String login);

    User findByUsernameIgnoreCase(String login);

}
