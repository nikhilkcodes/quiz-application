const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const quizRoutes = require('./routes/quizRoutes');
const submissionRoutes = require('./routes/submissionRoutes');

app.use('/api/quiz', quizRoutes);
app.use('/api/submission', submissionRoutes);

// Error handling middleware
const { handleErrors } = require('./utils/errorHandlers');
app.use(handleErrors);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
