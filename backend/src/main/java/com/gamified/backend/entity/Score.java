package com.gamified.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Score {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long studentId;
    private Long quizId;
    private int marks;
    private int totalMarks;

    public Score() {
    }

    public Long getId() {
        return id;
    }

    public Long getStudentId() {
        return studentId;
    }

    public Long getQuizId() {
        return quizId;
    }

    public int getMarks() {
        return marks;
    }

    public int getTotalMarks() {
        return totalMarks;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setStudentId(Long studentId) {
        this.studentId = studentId;
    }

    public void setQuizId(Long quizId) {
        this.quizId = quizId;
    }

    public void setMarks(int marks) {
        this.marks = marks;
    }

    public void setTotalMarks(int totalMarks) {
        this.totalMarks = totalMarks;
    }
}