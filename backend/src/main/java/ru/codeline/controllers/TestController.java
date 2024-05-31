package ru.codeline.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import ru.codeline.dto.TestRequest;
import ru.codeline.exceptions.LectureNotFoundException;
import ru.codeline.exceptions.TestNotFoundException;
import ru.codeline.models.course.Test;
import ru.codeline.services.TestService;

import java.util.UUID;

@RequiredArgsConstructor
@RequestMapping("/api/v1/lectures")
@RestController
public class TestController {
    private final TestService testService;

    @PreAuthorize("hasAuthority('TEACHER')")
    @PostMapping("/{lectureId}/test")
    public ResponseEntity<Test> createTest(@PathVariable UUID lectureId,
                                           @RequestBody TestRequest request) throws LectureNotFoundException {
        Test newTest = testService.createTest(lectureId, request);
        return ResponseEntity.ok(newTest);
    }

    @PreAuthorize("hasAnyAuthority('TEACHER', 'ADMIN')")
    @GetMapping("/{lectureId}/test")
    public ResponseEntity<Test> getTest(@PathVariable UUID lectureId) throws LectureNotFoundException {
        Test test = testService.getTestByLectureId(lectureId);
        return ResponseEntity.ok(test);
    }

    @PreAuthorize("hasAuthority('TEACHER')")
    @PutMapping("/{lectureId}/test")
    public ResponseEntity<Test> updateTest(@PathVariable UUID lectureId,
                                           @RequestBody TestRequest request) throws TestNotFoundException, LectureNotFoundException {
        Test updatedTest = testService.updateTest(lectureId, request);
        return ResponseEntity.ok(updatedTest);
    }

    @PreAuthorize("hasAuthority('TEACHER')")
    @DeleteMapping("/{lectureId}/test")
    public ResponseEntity<String> deleteTest(@PathVariable UUID lectureId) throws TestNotFoundException, LectureNotFoundException {
        testService.deleteTestByLectureId(lectureId);
        return ResponseEntity.ok("The test was deleted successfully!");
    }
}
