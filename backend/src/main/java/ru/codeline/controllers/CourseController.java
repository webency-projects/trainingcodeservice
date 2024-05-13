package ru.codeline.controllers;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import ru.codeline.dto.CourseResponse;
import ru.codeline.dto.CourseRequest;
import ru.codeline.models.user.Pass;
import ru.codeline.models.user.Role;
import ru.codeline.models.user.User;
import ru.codeline.repositories.PassRepository;
import ru.codeline.repositories.UserRepository;
import ru.codeline.services.CourseService;
import ru.codeline.services.JwtService;

import java.util.*;

@RequiredArgsConstructor
@RequestMapping("/api/v1")
@RestController
public class CourseController {

    private final UserRepository userRepository;
    private final PassRepository passRepository;
    private final CourseService courseService;
    private final JwtService jwtService;

    @GetMapping("/courses")
    @ResponseBody
    public ResponseEntity<?> getAllCourses(
            HttpServletRequest request
    ) {
        // Retrieve the JWT token from the request attributes
        String jwtToken = (String) request.getAttribute("jwtToken");

        if (jwtToken == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("JWT token not found in cookies");
        }

        try {
            String userEmail = jwtService.extractUsername(jwtToken);
            Pass pass = passRepository.findByUserEmail(userEmail).orElse(null);

            if (pass == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User with email " + userEmail + " not found");
            }

            if (Role.ADMIN.equals(pass.getRole()) || Role.STUDENT.equals(pass.getRole())) {
                List<CourseResponse> coursesWithTeachers = courseService.getAllCourses();
                return ResponseEntity.ok().body(coursesWithTeachers);
            } else {
                User user = userRepository.findByEmail(userEmail);
                List<CourseResponse> coursesWithoutTeachers = courseService.getAllCoursesForTeachers(user.getId());
                return ResponseEntity.ok().body(coursesWithoutTeachers);
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PreAuthorize("hasAuthority('TEACHER')")
    @PostMapping("/course")
    public ResponseEntity<String> createCourse(
            @RequestBody CourseRequest courseRequest,
            HttpServletRequest request
    ) {
        // Retrieve the JWT token from the request attributes
        String jwtToken = (String) request.getAttribute("jwtToken");

        if (jwtToken == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("JWT token not found in cookies");
        }

        try {
            String teacherEmail = jwtService.extractUsername(jwtToken);

            User teacher = userRepository.findByEmail(teacherEmail);
            if (teacher == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User with email " + teacherEmail + " not found");
            }

            courseService.createCourse(courseRequest, teacher);
            return ResponseEntity.ok("New course created successfully!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to create course: " + e.getMessage());
        }
    }
}
