import mongoose from "mongoose";

// Define schema for sub-service
const subServiceSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  type: String
});

// Create model from schema
const SubService = mongoose.model('SubService', subServiceSchema);

export {SubService}