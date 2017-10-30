package com.antilamer.mongoDbForum.dto;

import com.antilamer.mongoDbForum.model.Comment;
import org.springframework.beans.BeanUtils;

import java.io.Serializable;
import java.util.Date;

public class CommentDTO implements Serializable {

    private String id;

    private String text;

    private UserDTO user;

    private Date creationDate;


    public static CommentDTO convertToDTO(final Comment comment) {
        CommentDTO commentDTO = new CommentDTO();
        commentDTO.setUser(new UserDTO());
        BeanUtils.copyProperties(comment, commentDTO);
        BeanUtils.copyProperties(comment.getUser(), commentDTO.getUser());
        return commentDTO;
    }


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public UserDTO getUser() {
        return user;
    }

    public void setUser(UserDTO user) {
        this.user = user;
    }

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }
}
