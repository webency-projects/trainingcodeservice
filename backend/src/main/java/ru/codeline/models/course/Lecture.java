package ru.codeline.models.course;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
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
    private UUID id;

    @Column(name = "num_in_seq")
    private Integer numInSeq;

    @Column(columnDefinition = "varchar")
    private String title;
    @Column(columnDefinition = "text")
    private String description;

    @ManyToOne
    @JoinColumn(name = "course_id")
    @JsonBackReference
    @ToString.Exclude // Exclude from generated toString() to avoid circular reference
    private Course course;

    // The owning side - the Section entity (child), the inverse side - the Lecture entity (parent)
    @OneToMany(mappedBy = "lecture",
            orphanRemoval = true,
            cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    @JsonManagedReference
    @ToString.Exclude
    private List<Section> sections = new ArrayList<>();

    // The owning side - the Quiz entity (child), the inverse side - the Course entity (parent)
    @OneToMany(mappedBy = "lecture",
            orphanRemoval = true,
            cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    @JsonManagedReference
    @ToString.Exclude
    private List<Quiz> quizzes = new ArrayList<>();

    @OneToOne(mappedBy = "lecture", cascade = {CascadeType.PERSIST, CascadeType.REMOVE}) // Bidirectional relationship
    @JsonManagedReference
    @ToString.Exclude
    private Test test;
}
