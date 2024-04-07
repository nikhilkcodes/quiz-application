const express = require('express');
const router = express.Router();
const submissionController = require('../controllers/submissionController');
const quizData = require('../data/quizData.json'); // Import quizData

// POST route for submitting quiz answers
router.post('/', (req, res, next) => {
	// Call submitQuiz and pass quizData as argument
	submissionController.submitQuiz(req, res, next, quizData);
});

module.exports = router;
