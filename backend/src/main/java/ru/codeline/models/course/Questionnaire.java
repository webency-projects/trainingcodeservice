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
@Table(name = "Questionnaire")
public class Questionnaire {
    @Id
    @GeneratedValue
    private Integer id;

    @ManyToOne
    @JoinColumn
    private Course courseId;

    @ManyToOne
    @JoinColumn
    private Lecture lectureId;

    private String content;
    private String opt1;
    private String opt2;
    private String opt3;
    private String opt4;

    @Column(name = "CorrectAnswer")
    private String corrAns;
}
