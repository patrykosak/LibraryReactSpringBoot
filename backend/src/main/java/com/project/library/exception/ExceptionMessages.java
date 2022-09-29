package com.project.library.exception;

public enum ExceptionMessages {
    AUTHOR_WITH_THAT_ID_DOESNT_EXIST("Author with that id doesn't exist"),
    CATEGORY_WITH_THAT_ID_DOESNT_EXIST("Category with that id doesn't exist");

    private final String message;

    ExceptionMessages(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }
}
