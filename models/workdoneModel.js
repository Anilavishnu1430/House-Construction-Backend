//import mongoose
const mongoose = require("mongoose");

//Create schema and model
const workdoneSchema = new mongoose.Schema({
  projectname: {
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
    required: true
  },
  status: {
    type: String,
    required: true,
  },
  uploadedImage: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("workdone", workdoneSchema);