package com.antilamer.mongoDbForum.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Date;

@Service
public class FileBOImpl implements FileBO {

    @Value("${post.images.directory}")
    private String imagesDirectory;

    @Override
    public String uploadPostImage(MultipartFile postImage) throws IOException {
        Long fileCreateTime = new Date().getTime();
        String fileAddress = imagesDirectory + fileCreateTime;

        BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(new File(fileAddress)));
        stream.write(postImage.getBytes());
        stream.close();

        return fileCreateTime.toString();
    }
}
