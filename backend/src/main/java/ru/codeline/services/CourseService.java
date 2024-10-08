package ru.codeline.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.codeline.dto.CourseRequest;
import ru.codeline.dto.CourseResponse;
import ru.codeline.models.course.Course;
import ru.codeline.models.user.User;
import ru.codeline.repositories.CourseRepository;
import ru.codeline.repositories.UserRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class CourseService {
    private final CourseRepository courseRepository;
    private final UserRepository userRepository;

    public void createCourse(CourseRequest courseRequest, User teacherId) {
        Course course = new Course();
        course.setTitle(courseRequest.getTitle());
        course.setLanguage(courseRequest.getLanguage());
        course.setUser(teacherId);
        courseRepository.save(course);
    }

    public List<CourseResponse> getAllCourses() {
        List<Course> courses = courseRepository.findAll();
        List<CourseResponse> coursesWithTeachers = new ArrayList<>();

        for (Course course : courses) {
            User teacher = course.getUser();
            UUID teacherId = teacher.getId();
            String teacherFirstName = userRepository.findFirstNameById(teacherId);
            String teacherLastName = userRepository.findLastNameById(teacherId);

            CourseResponse courseResponse = new CourseResponse();
            courseResponse.setCourseId(course.getId());
            courseResponse.setTitle(course.getTitle());
            courseResponse.setLanguage(course.getLanguage());
            courseResponse.setNumOfLect(course.getNumOfLect());
            courseResponse.setTeacherId(teacherId);
            courseResponse.setTeacherFirstName(teacherFirstName);
            courseResponse.setTeacherLastName(teacherLastName);
            coursesWithTeachers.add(courseResponse);
        }

        return coursesWithTeachers;
    }

    public List<CourseResponse> getAllCoursesForTeachers(UUID teacherId) {
        List<Course> courses = courseRepository.findByUserId(teacherId);
        List<CourseResponse> coursesForTeachers = new ArrayList<>();

        for (Course course : courses) {
            CourseResponse courseResponseForTeachers = new CourseResponse(course.getId(), course.getTitle(), course.getLanguage(), course.getNumOfLect());
            coursesForTeachers.add(courseResponseForTeachers);
        }

        return coursesForTeachers;
    }
}

