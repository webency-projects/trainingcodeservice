package ru.codeline.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.codeline.models.course.Lecture;
import ru.codeline.models.course.Questionnaire;

import java.util.List;

public interface QuestionnaireRepository extends JpaRepository<Questionnaire, Integer> {
    List<Questionnaire> findByLecture(Lecture lecture);
}
