package com.hezerinkl.task.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
public class DateException extends RuntimeException {
    public DateException(String message) {
        super(message);
    }
}
