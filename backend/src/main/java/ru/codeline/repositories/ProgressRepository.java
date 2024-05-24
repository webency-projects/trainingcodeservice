package ru.codeline.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.codeline.models.user.CompositeKey;
import ru.codeline.models.user.Progress;

public interface ProgressRepository extends JpaRepository<Progress, CompositeKey> {
}
