package ru.codeline.services;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.codeline.dto.LectureRequest;
import ru.codeline.exceptions.CourseNotFoundException;
import ru.codeline.models.course.Course;
import ru.codeline.models.course.Lecture;
import ru.codeline.models.course.Section;
import ru.codeline.repositories.CourseRepository;
import ru.codeline.repositories.LectureRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class LectureService {
    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private LectureRepository lectureRepository;

    public Lecture addLectureWithSections(UUID courseId, LectureRequest request) throws CourseNotFoundException {
        Optional<Course> optionalCourse = courseRepository.findById(courseId);
        if (optionalCourse.isPresent()) {
            Course course = optionalCourse.get();
            Lecture lecture = new Lecture();
            lecture.setTitle(request.getTitle());
            lecture.setDescription(request.getDescription());
            lecture.setCourse(course);
            List<Section> sections = lecture.getSections();
            for (Section section : sections) {
                section.setLecture(lecture);
            }
            course.getLectures().add(lecture);
            return lectureRepository.save(lecture);
        } else {
            throw new CourseNotFoundException("Course not found with id: " + courseId);
        }
    }
}

