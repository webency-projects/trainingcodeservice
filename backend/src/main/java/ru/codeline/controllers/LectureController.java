package ru.codeline.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import ru.codeline.dto.LectureWithDetailsRequest;
import ru.codeline.models.course.Lecture;
import ru.codeline.services.LectureWithDetailsService;

import java.util.UUID;

@RequiredArgsConstructor
@RequestMapping("/api/v1")
@RestController
public class LectureController {
    private final LectureWithDetailsService lectureWithDetailsService;

    @PreAuthorize("hasAuthority('TEACHER')")
    @PostMapping("/course/lecture")
    public ResponseEntity<Lecture> createLecture(@RequestParam UUID courseId,
                                                 @RequestBody LectureWithDetailsRequest request) {
        try {
            Lecture newLecture = lectureWithDetailsService.addLectureWithDetails(courseId, request);
            return ResponseEntity.ok().body(newLecture);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
