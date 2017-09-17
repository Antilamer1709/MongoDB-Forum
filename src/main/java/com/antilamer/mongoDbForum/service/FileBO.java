package com.antilamer.mongoDbForum.service;

import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface FileBO {

    String uploadPostImage(MultipartFile postImage) throws IOException;

    ResponseEntity<byte[]> getPostImage(String imageId) throws IOException;

}
