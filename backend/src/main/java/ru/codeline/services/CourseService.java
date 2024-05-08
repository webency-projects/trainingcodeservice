package ru.codeline.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.codeline.dto.CreateCourse;
import ru.codeline.models.course.Course;
import ru.codeline.models.user.User;
import ru.codeline.repositories.CourseRepository;

@Service
@RequiredArgsConstructor
public class CourseService {
    private final CourseRepository courseRepository;

    public void createCourse(CreateCourse createCourse, User teacherId) {
        // Logic to save information from CourseRequest to the database
        var course = Course.builder()
                .title(createCourse.getTitle())
                .teacherId(teacherId)
                .build();
        courseRepository.save(course);
    }
}
