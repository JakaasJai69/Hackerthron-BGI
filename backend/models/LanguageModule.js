const mongoose = require('mongoose');

const LanguageModuleSchema = new mongoose.Schema({
  language: { type: String, required: true },
  description: { type: String },
  lessons: [
    {
      title: String,
      content: String,
      audioUrl: String,
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('LanguageModule', LanguageModuleSchema);
