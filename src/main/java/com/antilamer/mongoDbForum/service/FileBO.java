package com.antilamer.mongoDbForum.service;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface FileBO {

    String uploadPostImage(MultipartFile postImage) throws IOException;

}
