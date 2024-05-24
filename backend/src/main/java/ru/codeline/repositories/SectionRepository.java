package ru.codeline.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.codeline.models.course.Section;

public interface SectionRepository extends JpaRepository<Section, Integer> {
}
