package ru.codeline.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class AllCoursesResponse {
    private UUID courseId;
    private String title;
    private String language;
    private Integer numOfLect;
    private UUID teacherId;
    private String teacherFirstName;
    private String teacherLastName;

    public AllCoursesResponse(UUID courseId, String title, String language, Integer numOfLect) {
        this.courseId = courseId;
        this.title = title;
        this.language = language;
        this.numOfLect = numOfLect;
    }
}
