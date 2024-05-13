package ru.codeline.models.course;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import ru.codeline.models.user.User;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Courses")
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(updatable = false, nullable = false, length = 36)
    private UUID id;

    private String title;

    @ManyToOne
    @JoinColumn
    private User user;

    // The owning side - the Lecture entity (child), the inverse side - the Course entity (parent)
    @OneToMany(mappedBy = "course",
            orphanRemoval = true,
            cascade = {CascadeType.PERSIST, CascadeType.REMOVE},
            fetch = FetchType.LAZY)
    private List<Lecture> lectures = new ArrayList<>();

    // The owning side - the Questionnaire entity (child), the inverse side - the Course entity (parent)
    @OneToMany(mappedBy = "course",
            orphanRemoval = true,
            cascade = {CascadeType.PERSIST, CascadeType.REMOVE},
            fetch = FetchType.LAZY)
    private List<Questionnaire> questionnaires = new ArrayList<>();
}
