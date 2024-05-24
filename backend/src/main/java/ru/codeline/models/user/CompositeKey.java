package ru.codeline.models.user;

import jakarta.persistence.Embeddable;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import ru.codeline.models.course.Course;

import java.io.Serializable;

@Embeddable
public class CompositeKey implements Serializable {
    @ManyToOne
    @JoinColumn(name = "student_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "course_id")
    private Course course;
}
