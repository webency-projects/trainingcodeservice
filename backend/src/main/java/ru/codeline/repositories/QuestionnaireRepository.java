package ru.codeline.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.codeline.models.course.Questionnaire;

public interface QuestionnaireRepository extends JpaRepository<Questionnaire, Integer> {
}
