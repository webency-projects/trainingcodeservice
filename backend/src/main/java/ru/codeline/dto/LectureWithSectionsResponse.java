package ru.codeline.dto;

import lombok.*;

import java.util.List;
import java.util.UUID;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class LectureWithSectionsResponse {
    private UUID lectureId;
    private String title;
    private String description;
    private List<SectionResponse> sections;
}
