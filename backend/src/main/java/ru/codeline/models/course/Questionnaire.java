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
@Table(name = "Questionnaires")
public class Questionnaire {
    @Id
    @GeneratedValue
    private Integer id;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "lecture_id")
    private Lecture lecture;

    @Column(columnDefinition = "text")
    private String question;

    @Column(name = "option1", columnDefinition = "varchar")
    private String opt1;
    @Column(name = "option2", columnDefinition = "varchar")
    private String opt2;
    @Column(name = "option3", columnDefinition = "varchar")
    private String opt3;
    @Column(name = "option4", columnDefinition = "varchar")
    private String opt4;

    @Column(name = "correct_answer", columnDefinition = "varchar")
    private String corrAns;
}
