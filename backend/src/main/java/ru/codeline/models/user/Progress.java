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

    @ManyToOne
    @JoinColumn
    private Lecture lecture;

    @Column(columnDefinition = "int default 0")
    private Integer numOfFails;
}
