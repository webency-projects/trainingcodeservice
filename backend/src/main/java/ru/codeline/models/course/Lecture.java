package ru.codeline.models.course;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "Lectures")
public class Lecture {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(updatable = false, nullable = false, length = 36)
    private UUID id;

    private String title;

    @ManyToOne
    @JoinColumn
    private Course course;

    private String description;

    // The owning side - the Section entity (child), the inverse side - the Lecture entity (parent)
    @OneToMany(mappedBy = "lecture",
            orphanRemoval = true,
            cascade = {CascadeType.PERSIST, CascadeType.REMOVE},
            fetch = FetchType.LAZY)
    private List<Section> sections = new ArrayList<>();

    // The owning side - the Questionnaire entity (child), the inverse side - the Course entity (parent)
    @OneToMany(mappedBy = "lecture",
            orphanRemoval = true,
            cascade = {CascadeType.PERSIST, CascadeType.REMOVE},
            fetch = FetchType.LAZY)
    private List<Questionnaire> questionnaires = new ArrayList<>();
}
