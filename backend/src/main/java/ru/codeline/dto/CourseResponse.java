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
    private UUID teacherId;
    private String teacherFirstName;
    private String teacherLastName;

    public CourseResponse(UUID courseId, String title) {
        this.courseId = courseId;
        this.title = title;
    }
}
