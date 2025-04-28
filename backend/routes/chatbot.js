const express = require('express');
const router = express.Router();

// Mock chatbot response for demonstration
router.post('/message', (req, res) => {
  const userMessage = req.body.message;

  // Here you would integrate with your NLP model or external AI service
  // For now, return a mock response
  const botResponse = {
    reply: "This is a mock response about Indian cultural heritage.",
  };

  res.json(botResponse);
});

module.exports = router;
