package ru.codeline.models.course;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Tests")
public class Test {
    @Id
    @GeneratedValue
    private Integer id;

    @OneToOne
    @JsonBackReference
    @ToString.Exclude
    @JoinColumn(name = "lecture_id")
    private Lecture lecture;

    @Column(columnDefinition = "text")
    private String input;
    @Column(columnDefinition = "text")
    private String output;
}
