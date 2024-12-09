const mongoose = require('mongoose');
const Books = mongoose.model('books');

const booksList = async function (req, res) {
  console.log("Fetching books...");
  try {
      const books = await Books.find({}).maxTimeMS(20);   //added maxTimeMs due to timeout issue during stormy weather
      
      if (books.length === 0) {
          return res.status(404).json({ "message": "No books available" });
      }
      
      return res.status(200).json(books);
  } catch (err) {
      console.error("Error fetching books:", err);
      return res.status(500).json({ "error": "An error occurred while fetching books" });
  }
};
module.exports = {
    booksList
};