package ru.codeline.controllers;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import ru.codeline.dto.LectureRequest;
import ru.codeline.dto.LectureResponse;
import ru.codeline.dto.LectureWithSectionsResponse;
import ru.codeline.exceptions.CourseNotFoundException;
import ru.codeline.exceptions.LectureNotFoundException;
import ru.codeline.models.course.Lecture;
import ru.codeline.models.user.Pass;
import ru.codeline.models.user.Role;
import ru.codeline.models.user.User;
import ru.codeline.repositories.PassRepository;
import ru.codeline.repositories.UserRepository;
import ru.codeline.services.JwtService;
import ru.codeline.services.LectureService;

import java.util.List;
import java.util.UUID;

@RequiredArgsConstructor
@RequestMapping("/api/v1/course")
@RestController
public class LectureController {
    private final LectureService lectureService;
    private final JwtService jwtService;
    private final PassRepository passRepository;
    private final UserRepository userRepository;

    @PreAuthorize("hasAuthority('TEACHER')")
    @PostMapping("/{courseId}/lecture")
    public ResponseEntity<?> createLecture(@PathVariable UUID courseId,
                                           @RequestBody LectureRequest request) throws CourseNotFoundException {
        Lecture newLecture = lectureService.addLecture(courseId, request);
        return ResponseEntity.ok().body(newLecture);
    }

    @GetMapping("/{courseId}/lectures")
    public ResponseEntity<List<LectureResponse>> getAllLectures(@PathVariable UUID courseId) throws CourseNotFoundException {
        List<LectureResponse> lectures = lectureService.getAllLecturesByCourseId(courseId);
        return ResponseEntity.ok(lectures);
    }

    @GetMapping("/{courseId/lecture/{lectureId}")
    public ResponseEntity<?> getLecture(@PathVariable UUID courseId,
                                        @PathVariable UUID lectureId,
                                        HttpServletRequest request) {
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
            if (Role.ADMIN.equals(pass.getRole()) || Role.TEACHER.equals(pass.getRole())) {
                LectureWithSectionsResponse lectureWithSectionsResponse = lectureService.getLectureWithoutCheck(courseId, lectureId);
                return ResponseEntity.ok().body(lectureWithSectionsResponse);
            } else {
                User user = userRepository.findByEmail(userEmail);
                LectureWithSectionsResponse lectureWithSectionsResponse = lectureService.getLectureWithCheck(user, courseId, lectureId);
                return ResponseEntity.ok().body(lectureWithSectionsResponse);
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to get courses from the catalogue:(");
        }
    }

    @PreAuthorize("hasAuthority('TEACHER')")
    @PutMapping("/{courseId}/lecture/{lectureId}")
    public ResponseEntity<Lecture> updateLecture(@PathVariable UUID courseId,
                                                 @PathVariable UUID lectureId,
                                                 @RequestBody LectureRequest lectureRequest) throws LectureNotFoundException, CourseNotFoundException {
        Lecture updatedLecture = lectureService.updateLecture(courseId, lectureId, lectureRequest);
        return ResponseEntity.ok(updatedLecture);
    }

    @PreAuthorize("hasAuthority('TEACHER')")
    @DeleteMapping("/{courseId}/lecture/{lectureId}")
    public ResponseEntity<?> deleteLecture(@PathVariable UUID courseId,
                                           @PathVariable UUID lectureId) throws LectureNotFoundException, CourseNotFoundException {
        lectureService.deleteLectureById(courseId, lectureId);
        return ResponseEntity.ok("The course was deleted successfully!");
    }
}
