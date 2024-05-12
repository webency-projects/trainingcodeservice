package ru.codeline.dto.compiler;

import lombok.*;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class CompileResponse {
    private int problemId;
    private String output;
    private String expectedOutput;
    private String status;
    private LocalDateTime date;
}
