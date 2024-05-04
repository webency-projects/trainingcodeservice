package ru.codeline.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.codeline.models.course.Lecture;

import java.util.UUID;

public interface LectureRepository extends JpaRepository<Lecture, UUID> {
}
