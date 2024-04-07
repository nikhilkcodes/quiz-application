const correctAnswers = [
	"Callbacks",
	"fs",
	"Node Package Manager",
	"express",
	"To include external modules",
	"A mechanism for handling asynchronous operations",
	"It is only suitable for frontend development",
	"To define project metadata and dependencies",
	"Non-blocking I/O operations",
	"A function passed as an argument to another function"
];
module.exports = {
	submitQuiz: (req, res, next) => {
		try {
			const userAnswers = req.body.answers;
			// Check if userAnswers is not provided or is not an array
			if (!userAnswers || !Array.isArray(userAnswers)) {
				throw new Error('Answers are missing or invalid.');
			}

			// Ensure userAnswers is in the correct format
			for (const answer of userAnswers) {
				if (typeof answer.id !== 'number' || typeof answer.answer !== 'string') {
					throw new Error('Answers are not in the expected format.');
				}
			}

			// Calculate score based on correct answers
			let score = 0;
			for (const userAnswer of userAnswers) {
				const correctAnswer = correctAnswers[userAnswer.id];
				if (!correctAnswer) {
					throw new Error(`Correct answer for question with ID ${userAnswer.id} not found.`);
				}
				if (userAnswer.answer === correctAnswer) {
					score++;
				}
			}

			// Send response with score
			res.status(200).json({ success: true, score });
		} catch (error) {
			next(error);
		}
	}
};
