const mongoose = require('mongoose');

const ArtifactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String },
  category: { type: String },
  originPeriod: { type: String },
  location: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Artifact', ArtifactSchema);
