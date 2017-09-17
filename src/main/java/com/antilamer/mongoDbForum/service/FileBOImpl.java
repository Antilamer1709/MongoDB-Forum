package com.antilamer.mongoDbForum.service;

import com.mongodb.gridfs.GridFSDBFile;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.gridfs.GridFsOperations;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;

@Service
public class FileBOImpl implements FileBO {

    @Value("${post.images.directory}")
    private String imagesDirectory;

    @Autowired
    GridFsOperations gridFsOperations;

    @Override
    public String uploadPostImage(MultipartFile postImage) throws IOException {
        return this.gridFsOperations.store(postImage.getInputStream(), postImage.getName()).getId().toString();
    }

    @Override
    public ResponseEntity<byte[]> getPostImage(String imageId) throws IOException {
        GridFSDBFile file = this.gridFsOperations.findOne(new Query(Criteria.where("_id").is(imageId)));

        final HttpHeaders headers = new HttpHeaders();
        Long fileLength = file.getLength();
        headers.set("Content-Type", "image/jpeg");
        headers.set("Content-Length", fileLength.toString());

        return new ResponseEntity<>(IOUtils.toByteArray(file.getInputStream()), headers, HttpStatus.PARTIAL_CONTENT);
    }
}
