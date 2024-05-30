package ru.codeline.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.codeline.dto.QuizRequest;
import ru.codeline.dto.QuizResponse;
import ru.codeline.exceptions.LectureNotFoundException;
import ru.codeline.exceptions.QuizNotFoundException;
import ru.codeline.models.course.Quiz;
import ru.codeline.models.course.Lecture;
import ru.codeline.repositories.LectureRepository;
import ru.codeline.repositories.QuizRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class QuizService {
    private final LectureRepository lectureRepository;
    private final QuizRepository quizRepository;

    public Quiz createQuiz(UUID lectureId, QuizRequest request) throws LectureNotFoundException {
        Lecture lecture = lectureRepository.findById(lectureId)
                .orElseThrow(() -> new LectureNotFoundException("Lecture not found with id: " + lectureId));
        Quiz quiz = new Quiz();
        quiz.setQuestion(request.getQuestion());
        List<String> options = request.getOptions();
        quiz.setOpt1(options.get(0));
        quiz.setOpt2(options.get(1));
        quiz.setOpt3(options.get(2));
        quiz.setOpt4(options.get(3));
        quiz.setCorrAns(request.getCorrAns());
        quiz.setLecture(lecture);

        lecture.getQuizzes().add(quiz);
        return quiz;
    }

    public Quiz updateQuiz(UUID lectureId, Integer quizId, QuizRequest request) throws LectureNotFoundException, QuizNotFoundException {
        Lecture lecture = lectureRepository.findById(lectureId)
                .orElseThrow(() -> new LectureNotFoundException("Lecture not found with id: " + lectureId));
        Quiz quiz = quizRepository.findById(quizId)
                .orElseThrow(() -> new QuizNotFoundException("Quiz not found with id: " + quizId));

        quiz.setQuestion(request.getQuestion());
        quiz.setOpt1(request.getOptions().get(0));
        quiz.setOpt2(request.getOptions().get(1));
        quiz.setOpt3(request.getOptions().get(2));
        quiz.setOpt4(request.getOptions().get(3));
        quiz.setCorrAns(request.getCorrAns());

        // Save the updated quiz
        return quizRepository.save(quiz);
    }

    public List<QuizResponse> getAllQuizzesByLectureId(UUID lectureId) throws LectureNotFoundException {
        Lecture lecture = lectureRepository.findById(lectureId)
                .orElseThrow(() -> new LectureNotFoundException("Lecture not found with id: " + lectureId));
        List<QuizResponse> quizResponseList = new ArrayList<>();
        for (Quiz quiz : lecture.getQuizzes()) {
            QuizResponse response = new QuizResponse(
                    quiz.getId(),
                    quiz.getQuestion()
                    // quiz.getCorrAns()
            );
            quizResponseList.add(response);
        }
        return quizResponseList;
    }

    public Quiz getQuizByLectureId(UUID lectureId, Integer quizId) throws LectureNotFoundException, QuizNotFoundException {
        Lecture lecture = lectureRepository.findById(lectureId)
                .orElseThrow(() -> new LectureNotFoundException("Lecture not found with id: " + lectureId));
        List<Quiz> quizzes = lecture.getQuizzes();
        for (Quiz quiz : quizzes) {
            if (quiz.getId().equals(quizId)) {
                return quiz;
            }
        }
        throw new QuizNotFoundException("Quiz not found with id: " + quizId);
    }

    public void deleteQuiz(UUID lectureId, Integer quizId) throws LectureNotFoundException, QuizNotFoundException {
        Lecture lecture = lectureRepository.findById(lectureId)
                .orElseThrow(() -> new LectureNotFoundException("Lecture not found with id: " + lectureId));

        Optional<Quiz> quizToRemove = lecture.getQuizzes().stream()
                .filter(quiz -> quiz.getId().equals(quizId))
                .findFirst();

        if (quizToRemove.isPresent()) {
            lecture.getQuizzes().remove(quizToRemove.get());
            lectureRepository.save(lecture);  // Save the updated lecture, triggering orphan removal
        } else {
            throw new QuizNotFoundException("Quiz not found with id: " + quizId);
        }
    }
}
