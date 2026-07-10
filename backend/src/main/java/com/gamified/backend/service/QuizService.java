package com.gamified.backend.service;

import com.gamified.backend.entity.Quiz;
import com.gamified.backend.repository.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuizService {

    @Autowired
    private QuizRepository quizRepository;

    // Save Quiz
    public Quiz saveQuiz(Quiz quiz) {
        return quizRepository.save(quiz);
    }

    // Get All Quizzes
    public List<Quiz> getAllQuizzes() {
        return quizRepository.findAll();
    }

    // Update Quiz
    public Quiz updateQuiz(Long id, Quiz quizDetails) {

        Quiz quiz = quizRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Quiz not found"));

        quiz.setTitle(quizDetails.getTitle());
        quiz.setSubject(quizDetails.getSubject());
        quiz.setTotalMarks(quizDetails.getTotalMarks());

        return quizRepository.save(quiz);
    }
    public void deleteQuiz(Long id) {
    quizRepository.deleteById(id);
}
}