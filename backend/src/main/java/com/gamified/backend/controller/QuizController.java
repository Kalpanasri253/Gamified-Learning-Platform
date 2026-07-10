package com.gamified.backend.controller;

import com.gamified.backend.entity.Quiz;
import com.gamified.backend.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/quizzes")
@CrossOrigin("*")
public class QuizController {

    @Autowired
    private QuizService quizService;

    @PostMapping
    public Quiz saveQuiz(@RequestBody Quiz quiz) {
        return quizService.saveQuiz(quiz);
    }

    @GetMapping
    public List<Quiz> getAllQuizzes() {
        return quizService.getAllQuizzes();
    }

    @PutMapping("/{id}")
    public Quiz updateQuiz(@PathVariable Long id, @RequestBody Quiz quiz) {
        return quizService.updateQuiz(id, quiz);
    }
    @DeleteMapping("/{id}")
public String deleteQuiz(@PathVariable Long id) {
    quizService.deleteQuiz(id);
    return "Quiz deleted successfully";
}
}