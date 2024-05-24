package ru.codeline.services;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.codeline.dto.LectureWithDetailsRequest;
import ru.codeline.dto.QuestionnaireRequest;
import ru.codeline.dto.SectionRequest;
import ru.codeline.dto.TestRequest;
import ru.codeline.exceptions.CourseNotFoundException;
import ru.codeline.models.course.*;
import ru.codeline.repositories.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class LectureWithDetailsService {

    private final CourseRepository courseRepository;
    private final LectureRepository lectureRepository;
    private final SectionRepository sectionRepository;
    private final QuestionnaireRepository questionnaireRepository;
    private final TestRepository testRepository;

    @Transactional
    public Lecture addLectureWithDetails(UUID courseId, LectureWithDetailsRequest request) throws CourseNotFoundException {
        Optional<Course> optionalCourse = courseRepository.findById(courseId);
        if (optionalCourse.isPresent()) {
            Course course = optionalCourse.get();
            Lecture lecture = createLecture(request, course);

            // Save the lecture first to get its ID
            Lecture savedLecture = lectureRepository.save(lecture);

            // Adding sections
            for (SectionRequest sectionRequest : request.getSections()) {
                Section section = createSection(sectionRequest, savedLecture);
                sectionRepository.save(section);
                savedLecture.getSections().add(section);
            }

            // Adding questionnaires
            for (QuestionnaireRequest questionnaireRequest : request.getQuestionnaires()) {
                Questionnaire questionnaire = createQuestionnaire(questionnaireRequest, savedLecture);
                questionnaireRepository.save(questionnaire);
                savedLecture.getQuestionnaires().add(questionnaire);
            }

            // Adding test
            TestRequest testRequest = request.getTest();
            if (testRequest != null) {
                Test test = createTest(testRequest, savedLecture);
                testRepository.save(test);
                savedLecture.setTest(test);
            }

            return savedLecture;
        } else {
            throw new CourseNotFoundException("Course not found with id: " + courseId);
        }
    }

    private Lecture createLecture(LectureWithDetailsRequest request, Course course) {
        Lecture lecture = new Lecture();
        lecture.setNumInSeq(course.getNumOfLect() + 1);
        lecture.setTitle(request.getTitle());
        lecture.setDescription(request.getDescription());
        lecture.setCourse(course);

        course.getLectures().add(lecture);
        course.setNumOfLect(course.getNumOfLect() + 1);

        return lecture;
    }

    private Section createSection(SectionRequest sectionRequest, Lecture lecture) {
        Section section = new Section();
        section.setTitle(sectionRequest.getTitle());
        section.setNumInSeq(sectionRequest.getNumInSeq());
        section.setContent(sectionRequest.getContent());
        section.setLecture(lecture);
        return section;
    }

    private Questionnaire createQuestionnaire(QuestionnaireRequest questionnaireRequest, Lecture lecture) {
        if (questionnaireRequest.getOptions().size() != 4) {
            throw new IllegalArgumentException("Exactly 4 options must be provided");
        }

        Questionnaire questionnaire = new Questionnaire();
        questionnaire.setQuestion(questionnaireRequest.getQuestion());
        List<String> options = questionnaireRequest.getOptions();
        questionnaire.setOpt1(options.get(0));
        questionnaire.setOpt2(options.get(1));
        questionnaire.setOpt3(options.get(2));
        questionnaire.setOpt4(options.get(3));
        questionnaire.setCorrAns(questionnaireRequest.getCorrAns());
        questionnaire.setLecture(lecture);
        return questionnaire;
    }

    private Test createTest(TestRequest testRequest, Lecture lecture) {
        Test test = new Test();
        test.setInput(testRequest.getInput());
        test.setOutput(testRequest.getOutput());
        test.setLecture(lecture);
        return test;
    }
}

