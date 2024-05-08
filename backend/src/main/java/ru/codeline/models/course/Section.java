package ru.codeline.models.course;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Sections")
public class Section {
    @Id
    @GeneratedValue
    private Integer id;

    @ManyToOne
    @JoinColumn
    private Lecture lectureId;

    private String title;
    private Integer numInSeq;
    private String content;
}
