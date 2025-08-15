const express = require('express');
const JournalEntry = require('../models/journalEntry');
const router = express.Router();

router.get('/', async (req, res) => {
  const entries = await JournalEntry.find();
  res.json(entries);
});

router.post('/', async (req, res) => {
  const entry = new JournalEntry(req.body);
  await entry.save();
  res.status(201).json(entry);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const entry = await JournalEntry.findByIdAndUpdate(id, req.body, { new: true });
  res.json(entry);
});

router.delete('/:id', async (req, res) => {
  await JournalEntry.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;