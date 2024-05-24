package ru.codeline.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CourseResponse {
    private UUID courseId;
    private String title;
    private String language;
    private Integer numOfLect;
    private UUID teacherId;
    private String teacherFirstName;
    private String teacherLastName;

    public CourseResponse(UUID courseId, String title, String language, Integer numOfLect) {
        this.courseId = courseId;
        this.title = title;
        this.language = language;
        this.numOfLect = numOfLect;
    }
}
