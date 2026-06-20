//import mongoose
const mongoose = require("mongoose");

//Create schema and model
const replySchema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  repliedBy: {
    type: String,
    default: "admin",
  },
  repliedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Reply", replySchema);