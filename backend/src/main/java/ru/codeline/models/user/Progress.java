package ru.codeline.models.user;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import ru.codeline.models.course.Lecture;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Progress")
public class Progress {
    @EmbeddedId
    private CompositeKey id;

    // Unidirectional relationship
    @ManyToOne
    @JoinColumn(name = "curr_lect_id")
    private Lecture lecture;

    @Column(name = "num_of_mistakes", columnDefinition = "int default 0", nullable = false)
    private Integer numOfMistakes = 0;
}
