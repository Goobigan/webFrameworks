const mongoose = require('mongoose');


const reviewSchema = new mongoose.Schema({
  author: String,
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  },
  reviewText: String,
  createdOn: {
    type: Date,
    'default': Date.now
  }
});

const booksSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  synopsis: String,
  rating: {
    type: Number,
    'default': 0,
    min: 0,
    max: 5
  },
  genres: [String],
  reviews: [reviewSchema]
});

mongoose.model('books', booksSchema);