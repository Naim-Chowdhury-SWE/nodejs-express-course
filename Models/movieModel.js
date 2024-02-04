const mongoose = require("mongoose");

const noEmptyArray = function (value) {
  return Array.isArray(value) && value.length > 0;
};

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    unique: true,
    trim: true,
  },
  description: String,
  duration: {
    type: Number,
    required: [true, "Duration is required"],
    trim: true,
  },
  ratings: {
    type: Number,
    default: 1.0,
  },
  totalRating: {
    type: Number,
  },
  releaseYear: {
    type: Number,
    required: [true, "Release year is required"],
  },
  totalDate: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  genres: {
    type: [String],
    required: [true, "Genres is required"],
    validate: [noEmptyArray, "At least one genre is required"],
  },
  directors: {
    type: [String],
    required: [true, "Directors are required"],
    validate: [noEmptyArray, "At least one director is required"],
  },
  coverImage: {
    type: String,
    required: [true, "Cover image is required"],
  },
  actors: {
    type: [String],
    required: [true, "Actors is required"],
    validate: [noEmptyArray, "At least one actor is required"],
  },
  budget: {
    type: Number,
    required: [true, "Budget is required"],
  },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
