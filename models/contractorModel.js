//import mongoose
const mongoose = require("mongoose");

//Create schema and model
const contractorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  trade: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
    match: /^\d{4}-\d{2}-\d{2}$/
  },
  notes: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("Contractor", contractorSchema);