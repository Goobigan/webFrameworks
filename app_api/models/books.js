const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema({
  bookName: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  synopsis: String,
  Genres: [String]
},{collection: 'books'});

const booksModel = mongoose.model('books', booksSchema);

module.exports = booksModel;