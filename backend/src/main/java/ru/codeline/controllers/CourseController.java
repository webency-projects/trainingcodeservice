package ru.codeline.controllers;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import ru.codeline.dto.AllCoursesResponse;
import ru.codeline.dto.CourseRequest;
import ru.codeline.dto.CourseResponse;
import ru.codeline.exceptions.CourseNotFoundException;
import ru.codeline.models.course.Course;
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

    @PreAuthorize("hasAuthority('TEACHER')")
    @PostMapping("/course")
    public ResponseEntity<?> createCourse(@RequestBody CourseRequest courseRequest,
                                          HttpServletRequest request) {
        // Retrieve the JWT token from the request attributes
        String jwtToken = (String) request.getAttribute("jwtToken");

        if (jwtToken == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("JWT token not found in cookies:(");
        }
        try {
            String teacherEmail = jwtService.extractUsername(jwtToken);
            User teacher = userRepository.findByEmail(teacherEmail);

            if (teacher == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User with email " + teacherEmail + " not found:(");
            }

            Course newCourse = courseService.createCourse(courseRequest, teacher);

            return ResponseEntity.ok(newCourse);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to create a new course:(");
        }
    }

    @GetMapping("/courses")
    // @ResponseBody
    public ResponseEntity<?> getAllCourses(HttpServletRequest request) {
        // Retrieve the JWT token from the request attributes
        String jwtToken = (String) request.getAttribute("jwtToken");

        if (jwtToken == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("JWT token not found in cookies:(");
        }
        try {
            String userEmail = jwtService.extractUsername(jwtToken);
            Pass pass = passRepository.findByUserEmail(userEmail).orElse(null);

            if (pass == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User with email " + userEmail + " not found:(");
            }
            if (Role.ADMIN.equals(pass.getRole()) || Role.STUDENT.equals(pass.getRole())) {
                List<AllCoursesResponse> coursesWithTeachers = courseService.getAllCourses();
                return ResponseEntity.ok(coursesWithTeachers);
            } else {
                User user = userRepository.findByEmail(userEmail);
                List<AllCoursesResponse> coursesWithoutTeachers = courseService.getAllCoursesForTeachers(user.getId());
                return ResponseEntity.ok(coursesWithoutTeachers);
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to get courses from the catalogue:(");
        }
    }

    @PreAuthorize("hasAuthority('TEACHER')")
    @PutMapping("/courses/{courseId}")
    public ResponseEntity<CourseResponse> updateCourse(@PathVariable UUID courseId,
                                                       @RequestBody CourseRequest request) throws CourseNotFoundException {
        CourseResponse courseResponse = courseService.updateCourse(courseId, request);
        return ResponseEntity.ok(courseResponse);
    }

    @PreAuthorize("hasAuthority('TEACHER')")
    @DeleteMapping("/courses/{courseId}")
    public ResponseEntity<String> deleteCourse(@PathVariable UUID courseId) throws CourseNotFoundException {
        courseService.deleteCourseById(courseId);
        return ResponseEntity.ok("The course was deleted successfully!");
    }
}
