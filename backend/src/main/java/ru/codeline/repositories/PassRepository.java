package ru.codeline.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.codeline.models.user.Pass;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface PassRepository extends JpaRepository<Pass, UUID> {
    Optional<Pass> findByUserEmail(String email);
}
