package ru.codeline.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class LectureWithDetailsRequest {
    private String title;
    private String description;
    private List<SectionRequest> sections;
    private List<QuestionnaireRequest> questionnaires;
    private TestRequest test;
}

