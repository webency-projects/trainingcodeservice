package ru.codeline.models.course;

import com.fasterxml.jackson.annotation.JsonBackReference;
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

    @Column(columnDefinition = "varchar")
    private String title;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "lecture_id")
    private Lecture lecture;

    @Column(name = "num_in_seq")
    private Integer numInSeq;

    @Column(columnDefinition = "text")
    private String content;
}
