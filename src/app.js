// src/app.js

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/books638', { useMongoClient: true });

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// test route
app.get('/', (request, response) => {
  response.send('vintage books api');
});

//books routes
const booksController = require('./controllers/booksController');
app.get('/api/books', booksController.getAll);
app.post('/api/books', booksController.create);
app.get('/api/books/:id', booksController.getById);
app.put('/api/books/:id', booksController.update);
app.delete('/api/books/:id', booksController.remove);

module.exports = app;
