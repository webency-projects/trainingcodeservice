package ru.codeline.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.codeline.models.course.Test;

public interface TestRepository extends JpaRepository<Test, Integer> {
}
