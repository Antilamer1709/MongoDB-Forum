package com.antilamer.mongoDbForum.dto.response;

public class Response {

    private int code;
    private String message;
    private Exception exception;


    public Response(int code, String message, Exception exception) {
        this.code = code;
        this.message = message;
        this.exception = exception;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Exception getException() {
        return exception;
    }

    public void setException(Exception exception) {
        this.exception = exception;
    }
}
