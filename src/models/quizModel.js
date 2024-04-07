const quizData = require('../data/quizData.json');

module.exports = {
	getQuestions: () => {
		// Simply return the array of questions from the JSON data
		return quizData.questions;
	},
	// Add more model methods as needed
};
