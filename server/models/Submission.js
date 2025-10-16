const mongoose = require('mongoose');

const SubmissionSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String,
  city: String,
  zip: String,
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Submission', SubmissionSchema);
