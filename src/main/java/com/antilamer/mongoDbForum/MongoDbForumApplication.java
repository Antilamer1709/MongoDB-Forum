package com.antilamer.mongoDbForum;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;

@SpringBootApplication
public class MongoDbForumApplication extends SpringBootServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(MongoDbForumApplication.class, args);
	}

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(MongoDbForumApplication.class);
	}

}
