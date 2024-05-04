package ru.codeline.models.user;

import jakarta.persistence.Embeddable;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import ru.codeline.models.course.Course;

import java.io.Serializable;

@Embeddable
public class CompositeKey implements Serializable {
    @ManyToOne
    @JoinColumn
    private User studentId;

    @ManyToOne
    @JoinColumn
    private Course courseId;

}
