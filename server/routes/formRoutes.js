const express = require('express');
const router = express.Router();
const Submission = require('../models/Submission');

// POST /api/form
router.post('/', async (req, res) => {
  try {
    console.log('📩 Data received:', req.body);
    
    // Validate data
    if (!req.body.name || !req.body.email) {
      console.log('❌ Validation failed: Missing required fields');
      return res.status(400).json({ error: 'Name and email are required' });
    }
    
    const newSubmission = new Submission(req.body);
    console.log('💾 Attempting to save to MongoDB...');
    
    await newSubmission.save();
    
    console.log('✅ Successfully saved to MongoDB!');
    res.status(201).json({ 
      message: 'Form submitted successfully!',
      data: newSubmission 
    });
    
  } catch (error) {
    console.error('❌ Error saving form:');
    console.error('Error name:', error.name);
    console.error('Error message:', error.message);
    console.error('Full error:', error);
    
    res.status(500).json({ 
      error: 'Failed to save form data.',
      details: error.message 
    });
  }
});

// GET /api/form - Get all submissions (for testing)
router.get('/', async (req, res) => {
  try {
    const submissions = await Submission.find();
    res.json({ 
      total: submissions.length,
      submissions 
    });
  } catch (error) {
    console.error('❌ Error fetching submissions:', error);
    res.status(500).json({ error: 'Failed to fetch submissions' });
  }
});

module.exports = router;