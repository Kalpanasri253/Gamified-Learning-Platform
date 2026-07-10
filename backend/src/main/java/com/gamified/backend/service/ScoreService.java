package com.gamified.backend.service;

import com.gamified.backend.entity.Score;
import com.gamified.backend.repository.ScoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ScoreService {

    @Autowired
    private ScoreRepository scoreRepository;

    // Add Score
    public Score saveScore(Score score) {
        return scoreRepository.save(score);
    }

    // Get All Scores
    public List<Score> getAllScores() {
        return scoreRepository.findAll();
    }

    // Update Score
    public Score updateScore(Long id, Score scoreDetails) {

        Score score = scoreRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Score not found"));

        score.setStudentId(scoreDetails.getStudentId());
        score.setQuizId(scoreDetails.getQuizId());
        score.setMarks(scoreDetails.getMarks());
        score.setTotalMarks(scoreDetails.getTotalMarks());

        return scoreRepository.save(score);
    }

    // Delete Score
    public void deleteScore(Long id) {
        scoreRepository.deleteById(id);
    }
}