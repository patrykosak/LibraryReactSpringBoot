package com.project.library.exception;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.time.LocalDateTime;

public class EntityErrorResponse {
    private Integer statusCode;
    private String message;

    @JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss")
    private LocalDateTime errorTime;

    public EntityErrorResponse() {
    }

    public EntityErrorResponse(Integer statusCode, String message, LocalDateTime errorTime) {
        this.statusCode = statusCode;
        this.message = message;
        this.errorTime = errorTime;
    }

    public Integer getStatusCode() {
        return statusCode;
    }

    public void setStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public LocalDateTime getErrorTime() {
        return errorTime;
    }

    public void setErrorTime(LocalDateTime errorTime) {
        this.errorTime = errorTime;
    }
}