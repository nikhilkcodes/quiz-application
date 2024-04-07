const quizModel = require('../models/quizModel');

module.exports = {
	getQuizQuestions: (req, res, next) => {
		try {
			// Fetch quiz questions from the model
			const questions = quizModel.getQuestions();

			// Check if there are no questions
			if (!questions || questions.length === 0) {
				throw new Error('No quiz questions available.');
			}

			// Send response with quiz questions
			res.status(200).json({ success: true, questions });
		} catch (error) {
			// Pass error to the error handling middleware
			next(error);
		}
	}
	// Add more controller methods as needed
};
