package com.project.library.exception;

import com.project.library.common.TimeSupplier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
class ControllerExceptionHandler {

    private final TimeSupplier timeSupplier;

    ControllerExceptionHandler(TimeSupplier timeSupplier) {
        this.timeSupplier = timeSupplier;
    }

    @ExceptionHandler
    ResponseEntity<EntityErrorResponse> exceptionHandler(BusinessLogicException ex) {
        EntityErrorResponse postErrorRes = new EntityErrorResponse(
                HttpStatus.BAD_REQUEST.value(),
                ex.getMessage(),
                timeSupplier.get()
        );
        return ResponseEntity.status(HttpStatus.BAD_REQUEST.value()).body(postErrorRes);
    }
}