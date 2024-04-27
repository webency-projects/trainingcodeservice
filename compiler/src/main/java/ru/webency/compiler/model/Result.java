package ru.webency.compiler.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Result {
    private String status;
    private String output;
    private String expectedOutput;
}
