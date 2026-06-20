//import mongoose
const mongoose = require("mongoose");

//Create schema and model
const ratingSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  feedback: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("Rating", ratingSchema);