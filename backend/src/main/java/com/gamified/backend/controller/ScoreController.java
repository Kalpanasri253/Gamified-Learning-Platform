package com.gamified.backend.controller;

import com.gamified.backend.entity.Score;
import com.gamified.backend.service.ScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/scores")
@CrossOrigin("*")
public class ScoreController {

    @Autowired
    private ScoreService scoreService;

    // Add Score
    @PostMapping
    public Score saveScore(@RequestBody Score score) {
        return scoreService.saveScore(score);
    }

    // Get All Scores
    @GetMapping
    public List<Score> getAllScores() {
        return scoreService.getAllScores();
    }

    // Update Score
    @PutMapping("/{id}")
    public Score updateScore(@PathVariable Long id,
                             @RequestBody Score score) {
        return scoreService.updateScore(id, score);
    }

    // Delete Score
    @DeleteMapping("/{id}")
    public String deleteScore(@PathVariable Long id) {
        scoreService.deleteScore(id);
        return "Score deleted successfully";
    }
}
