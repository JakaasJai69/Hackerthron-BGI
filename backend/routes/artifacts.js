const express = require('express');
const router = express.Router();
const Artifact = require('../models/Artifact');

// GET all artifacts
router.get('/', async (req, res) => {
  try {
    const artifacts = await Artifact.find();
    res.json(artifacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET artifact by ID
router.get('/:id', async (req, res) => {
  try {
    const artifact = await Artifact.findById(req.params.id);
    if (!artifact) return res.status(404).json({ message: 'Artifact not found' });
    res.json(artifact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST create new artifact
router.post('/', async (req, res) => {
  const artifact = new Artifact({
    name: req.body.name,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    category: req.body.category,
    originPeriod: req.body.originPeriod,
    location: req.body.location,
  });

  try {
    const newArtifact = await artifact.save();
    res.status(201).json(newArtifact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
