package ru.codeline.exceptions;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class TestNotFoundException extends Exception {
    private final String message;
}
