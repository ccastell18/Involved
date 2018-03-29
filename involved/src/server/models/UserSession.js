const mongoose = require('mongoose');

const UserSessionSchema = new mongoose.Schema({
  UserId: {
    type: String,
    default: ''
  },
  timestamp: {
    type: Date,
    deault: Date.now()
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('UserSession', UserSessionSchema);
