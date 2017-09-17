package com.antilamer.mongoDbForum.dto;

import java.io.Serializable;

public class PostDTO implements Serializable {

    private String id;

    private String header;

    private String content;

    private String imageId;


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getHeader() {
        return header;
    }

    public void setHeader(String header) {
        this.header = header;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getImageId() {
        return imageId;
    }

    public void setImageId(String imageId) {
        this.imageId = imageId;
    }



    public boolean isValid() {
        return header != null && content != null && !header.isEmpty() && !content.isEmpty();
    }
}
