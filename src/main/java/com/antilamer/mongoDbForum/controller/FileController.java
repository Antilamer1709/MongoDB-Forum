package com.antilamer.mongoDbForum.controller;

import com.antilamer.mongoDbForum.service.FileBO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;


@RestController
@RequestMapping("/file")
public class FileController {


    @Autowired
    private FileBO fileBO;


    @RequestMapping(value = "/uploadPostImage", method = RequestMethod.POST)
    public String uploadPostImage(@RequestParam MultipartFile postImage) throws IOException {
        return fileBO.uploadPostImage(postImage);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/getPostImage")
    public ResponseEntity<byte[]> getPostImage(@RequestParam String imageId) throws IOException {
        return fileBO.getPostImage(imageId);
    }

}
