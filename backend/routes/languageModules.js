const express = require('express');
const router = express.Router();
const LanguageModule = require('../models/LanguageModule');

// GET all language modules
router.get('/', async (req, res) => {
  try {
    const modules = await LanguageModule.find();
    res.json(modules);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET language module by ID
router.get('/:id', async (req, res) => {
  try {
    const module = await LanguageModule.findById(req.params.id);
    if (!module) return res.status(404).json({ message: 'Language module not found' });
    res.json(module);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST create new language module
router.post('/', async (req, res) => {
  const module = new LanguageModule({
    language: req.body.language,
    description: req.body.description,
    lessons: req.body.lessons,
  });

  try {
    const newModule = await module.save();
    res.status(201).json(newModule);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
