package com.gamified.backend.service;

import com.gamified.backend.entity.Question;
import com.gamified.backend.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionService {

    @Autowired
    private QuestionRepository questionRepository;


    // Add Question
    public Question saveQuestion(Question question) {
        return questionRepository.save(question);
    }


    // Get All Questions
    public List<Question> getAllQuestions() {
        return questionRepository.findAll();
    }


    // Update Question
    public Question updateQuestion(Long id, Question questionDetails) {

        Question question = questionRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Question not found"));

        question.setQuestionText(questionDetails.getQuestionText());
        question.setOptionA(questionDetails.getOptionA());
        question.setOptionB(questionDetails.getOptionB());
        question.setOptionC(questionDetails.getOptionC());
        question.setOptionD(questionDetails.getOptionD());
        question.setCorrectAnswer(questionDetails.getCorrectAnswer());
        question.setQuizId(questionDetails.getQuizId());

        return questionRepository.save(question);
    }


    // Delete Question
    public void deleteQuestion(Long id) {
        questionRepository.deleteById(id);
    }
}
