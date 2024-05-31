package ru.codeline.services;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.codeline.dto.TestRequest;
import ru.codeline.exceptions.LectureNotFoundException;
import ru.codeline.exceptions.TestNotFoundException;
import ru.codeline.models.course.Lecture;
import ru.codeline.models.course.Test;
import ru.codeline.repositories.LectureRepository;
import ru.codeline.repositories.TestRepository;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class TestService {
    private final LectureRepository lectureRepository;
    private final TestRepository testRepository;

    @Transactional
    public Test createTest(UUID lectureId, TestRequest request) throws LectureNotFoundException {
        Lecture lecture = lectureRepository.findById(lectureId)
                .orElseThrow(() -> new LectureNotFoundException("Lecture not found with id: " + lectureId));

        Test newTest = new Test();
        newTest.setInput(request.getInput());
        newTest.setOutput(request.getOutput());
        newTest.setLecture(lecture);

        lecture.setTest(newTest);
        lectureRepository.save(lecture);

        return newTest;
    }

    @Transactional
    public Test updateTest(UUID lectureId, TestRequest request) throws LectureNotFoundException, TestNotFoundException {
        Lecture lecture = lectureRepository.findById(lectureId)
                .orElseThrow(() -> new LectureNotFoundException("Lecture not found with id: " + lectureId));

        Test test = lecture.getTest();
        if (test == null) {
            throw new TestNotFoundException("Test not found for lecture with id: " + lectureId);
        }

        // Update the test properties with the request data
        test.setInput(request.getInput());
        test.setOutput(request.getOutput());

        // Save the updated test
        return testRepository.save(test);
    }

    public Test getTestByLectureId(UUID lectureId) throws LectureNotFoundException {
        Lecture lecture = lectureRepository.findById(lectureId)
                .orElseThrow(() -> new LectureNotFoundException("Lecture not found with id: " + lectureId));
        return lecture.getTest();
    }

    @Transactional
    public void deleteTestByLectureId(UUID lectureId) throws LectureNotFoundException, TestNotFoundException {
        Lecture lecture = lectureRepository.findById(lectureId)
                .orElseThrow(() -> new LectureNotFoundException("Lecture not found with id: " + lectureId));

        if (lecture.getTest() == null) {
            throw new TestNotFoundException("Test not found for lecture with id: " + lectureId);
        }

        // Set the test reference to null in lecture to avoid orphaned entity
        lecture.setTest(null);
        lectureRepository.save(lecture);
    }
}
