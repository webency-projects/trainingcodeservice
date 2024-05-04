package ru.codeline.controllers;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import ru.codeline.dto.CreateCourse;
import ru.codeline.models.course.Course;
import ru.codeline.models.user.User;
import ru.codeline.repositories.CourseRepository;
import ru.codeline.repositories.UserRepository;
import ru.codeline.services.CourseService;
import ru.codeline.services.JwtService;

import java.util.*;

@RequiredArgsConstructor
@RequestMapping("/api/v1")
@RestController
public class CourseController {

    private final UserRepository userRepository;
    private final CourseRepository courseRepository;
    private final CourseService courseService;
    private final JwtService jwtService;

    @GetMapping("/courses")
    @ResponseBody
    public List<Map<String, Object>> getAllCoursesWithTeacherNames() {
        Iterable<Course> courses = courseRepository.findAll();
        List<Map<String, Object>> coursesWithTeachers = new ArrayList<>();

        int index = 1; // Starting index

        for (Course course : courses) {
            String title = course.getTitle();
            User teacher = course.getTeacherId();
            UUID teacherId = teacher.getId();
            String teacherFirstName = userRepository.findFirstNameById(teacherId);
            String teacherLastName = userRepository.findLastNameById(teacherId);

            Map<String, Object> courseWithTeacher = new HashMap<>();
            courseWithTeacher.put("index", index); // Add index
            courseWithTeacher.put("title", title);
            courseWithTeacher.put("firstName", teacherFirstName);
            courseWithTeacher.put("lastName", teacherLastName);

            coursesWithTeachers.add(courseWithTeacher);

            index++; // Increment index for the next item
        }

        return coursesWithTeachers;
    }

    @PreAuthorize("hasAuthority('TEACHER')")
    @PostMapping("/course")
    public ResponseEntity<String> createCourse(
            @RequestBody CreateCourse createCourse,
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

            courseService.createCourse(createCourse, teacher);
            return ResponseEntity.ok("New course created successfully!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to create course: " + e.getMessage());
        }
    }
}
