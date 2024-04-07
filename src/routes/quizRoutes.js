const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');

// Define routes
router.get('/', quizController.getQuizQuestions);

module.exports = router;
