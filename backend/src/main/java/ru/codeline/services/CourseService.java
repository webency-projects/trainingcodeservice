package ru.codeline.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.codeline.dto.CourseRequest;
import ru.codeline.dto.AllCoursesResponse;
import ru.codeline.dto.CourseResponse;
import ru.codeline.exceptions.CourseNotFoundException;
import ru.codeline.models.course.Course;
import ru.codeline.models.user.User;
import ru.codeline.repositories.CourseRepository;
import ru.codeline.repositories.UserRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class CourseService {
    private final CourseRepository courseRepository;
    private final UserRepository userRepository;

    public Course createCourse(CourseRequest courseRequest, User teacherId) {
        Course course = new Course();
        course.setTitle(courseRequest.getTitle());
        course.setLanguage(courseRequest.getLanguage());
        course.setUser(teacherId);
        courseRepository.save(course);

        return course;
    }

    public CourseResponse updateCourse(UUID courseId, CourseRequest request) throws CourseNotFoundException{
        Optional<Course> optionalCourse = courseRepository.findById(courseId);
        if (optionalCourse.isPresent()) {
            Course updatedCourse = optionalCourse.get();
            updatedCourse.setTitle(request.getTitle());
            updatedCourse.setLanguage(request.getLanguage());

            courseRepository.save(updatedCourse);

            return new CourseResponse(updatedCourse.getId(), updatedCourse.getTitle(), updatedCourse.getLanguage());
        } else {
            throw new CourseNotFoundException("Course not found with id: " + courseId);
        }
    }

    public List<AllCoursesResponse> getAllCourses() {
        List<Course> courses = courseRepository.findAll();
        List<AllCoursesResponse> coursesWithTeachers = new ArrayList<>();

        for (Course course : courses) {
            User teacher = course.getUser();
            UUID teacherId = teacher.getId();
            String teacherFirstName = userRepository.findFirstNameById(teacherId);
            String teacherLastName = userRepository.findLastNameById(teacherId);

            AllCoursesResponse allCoursesResponse = new AllCoursesResponse();
            allCoursesResponse.setCourseId(course.getId());
            allCoursesResponse.setTitle(course.getTitle());
            allCoursesResponse.setLanguage(course.getLanguage());
            allCoursesResponse.setNumOfLect(course.getNumOfLect());
            allCoursesResponse.setTeacherId(teacherId);
            allCoursesResponse.setTeacherFirstName(teacherFirstName);
            allCoursesResponse.setTeacherLastName(teacherLastName);
            coursesWithTeachers.add(allCoursesResponse);
        }

        return coursesWithTeachers;
    }

    public List<AllCoursesResponse> getAllCoursesForTeachers(UUID teacherId) {
        List<Course> courses = courseRepository.findByUserId(teacherId);
        List<AllCoursesResponse> coursesForTeachers = new ArrayList<>();

        for (Course course : courses) {
            AllCoursesResponse allCoursesResponseForTeachers = new AllCoursesResponse(course.getId(),
                    course.getTitle(), course.getLanguage(), course.getNumOfLect());
            coursesForTeachers.add(allCoursesResponseForTeachers);
        }

        return coursesForTeachers;
    }

    public void deleteCourseById(UUID courseId) throws CourseNotFoundException {
        if (!courseRepository.existsById(courseId)) {
            throw new CourseNotFoundException("Course not found with id: " + courseId);
        }
        courseRepository.deleteById(courseId);
    }
}

