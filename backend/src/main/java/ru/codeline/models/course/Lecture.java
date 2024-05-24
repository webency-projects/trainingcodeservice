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

    @Column(columnDefinition = "varchar")
    private String title;
    @Column(columnDefinition = "text")
    private String description;

    @ManyToOne
    @JoinColumn(name = "course_id")
    @JsonBackReference
    private Course course;

    @Column(name = "num_in_seq")
    private Integer numInSeq;

    // The owning side - the Section entity (child), the inverse side - the Lecture entity (parent)
    @OneToMany(mappedBy = "lecture",
            orphanRemoval = true,
            cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    @JsonManagedReference
    private List<Section> sections = new ArrayList<>();

    /*public void addSection(SectionRequest request) {
        Section section = new Section();
        section.setNumInSeq(request.getNumInSeq());
        section.setTitle(request.getTitle());
        section.setContent(request.getContent());
        section.setLecture(this);
        this.sections.add(section);
    }*/

    // The owning side - the Questionnaire entity (child), the inverse side - the Course entity (parent)
    @OneToMany(mappedBy = "lecture",
            orphanRemoval = true,
            cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    @JsonManagedReference
    private List<Questionnaire> questionnaires = new ArrayList<>();

    @OneToOne(mappedBy = "lecture") // Bidirectional relationship
    @JsonManagedReference
    private Test test;
}
