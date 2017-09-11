package com.antilamer.mongoDbForum.exeption;

public class ValidationExeption extends RuntimeException {
    public ValidationExeption(String message) {
        super(message);
    }
}