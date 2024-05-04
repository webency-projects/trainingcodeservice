package ru.codeline.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.codeline.dto.AddTeacher;
import ru.codeline.services.TeacherService;

@RequiredArgsConstructor
@RequestMapping("/api/v1")
@RestController
public class TeacherController {
    private final TeacherService teacherService;

    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping("/teacher")
    public ResponseEntity<String> addTeacher(@RequestBody AddTeacher request) {
        teacherService.addTeacher(request);
        return ResponseEntity.ok("New teacher added successfully!");
    }
}
