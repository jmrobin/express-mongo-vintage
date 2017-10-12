// src/controllers/booksController.js

const Book = require('../models/book');

module.exports = {
  getAll (request, response) {
    const query = {};
    Book.find(query, (error, books) => {
      if (error) {
        response.status(500).send({ error: error });
      } else {
        response.send(books);
      }
    });
  },
  create (request, response) {
    const bookObject = request.body;
    Book.create(bookObject, (error, book) => {
      if (error) {
        response.status(500).send({ error: error });
      } else {
        response.status(201).send(book);
      }
    });
  },
  getById (request, response) {
    const bookId = request.params.id;
    Book.findById(bookId, (error, book) => {
      if (error) {
        response.status(500).send({ error: error });
      } else {
        response.send(book);
      }
    });
  },
  update (request, response) {
    const bookId = request.params.id;
    const bookObject = request.body;
    Book.findByIdAndUpdate(bookId, bookObject, { new: true }, (error, book) => {
      if (error) {
        response.status(500).send({ error: error });
      } else {
        response.send(book);
      }
    });
  },
  remove (request, response) {
    const bookId = request.params.id;
    Book.findByIdAndRemove(bookId, (error, book) => {
      if (error) {
        response.status(500).send({ error: error });
      } else {
        response.status(204).send(book);
      }
    });
  }
};
