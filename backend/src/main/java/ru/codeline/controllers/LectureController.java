package ru.codeline.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import ru.codeline.dto.LectureRequest;
import ru.codeline.models.course.Lecture;
import ru.codeline.services.LectureService;

import java.util.UUID;

@RequiredArgsConstructor
@RequestMapping("/api/v1")
@RestController
public class LectureController {
    private final LectureService lectureService;

    @PreAuthorize("hasAuthority('TEACHER')")
    @PostMapping("/course/lecture")
    public ResponseEntity<Lecture> createLecture(@RequestParam UUID courseId,
                                                 @RequestBody LectureRequest request) {
        try {
            Lecture newLecture = lectureService.addLectureWithSections(courseId, request);
            return ResponseEntity.ok().body(newLecture);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
