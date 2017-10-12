// src/models/book.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: String
});

module.exports = mongoose.model('Book', BookSchema);
