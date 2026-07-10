package com.gamified.backend.service;

import com.gamified.backend.entity.Teacher;
import com.gamified.backend.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeacherService {

    @Autowired
    private TeacherRepository teacherRepository;

    // Save Teacher
    public Teacher saveTeacher(Teacher teacher) {
        return teacherRepository.save(teacher);
    }

    // Get All Teachers
    public List<Teacher> getAllTeachers() {
        return teacherRepository.findAll();
    }
}
