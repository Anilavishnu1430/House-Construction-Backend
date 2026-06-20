//import mongoose
const mongoose = require("mongoose");

//Create schema and model
const projectSchema = new mongoose.Schema({
  projectname: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  plotsize: {
    type: String,
    required: true,
  },
  direction: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  uploadedImages: {
    type: Array,
    required: true,
  }
});

module.exports = mongoose.model("project", projectSchema);