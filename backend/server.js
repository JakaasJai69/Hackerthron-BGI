const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const artifactsRoutes = require('./routes/artifacts');
const chatbotRoutes = require('./routes/chatbot');
const languageModulesRoutes = require('./routes/languageModules');
const usersRoutes = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/artifacts', artifactsRoutes);
app.use('/api/chatbot', chatbotRoutes);
app.use('/api/language-modules', languageModulesRoutes);
app.use('/api/users', usersRoutes);

// MongoDB connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/swarn_sanskriti';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
});
