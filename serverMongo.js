'use strict';
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const app = express();
app.set('port', (process.env.PORT || 3030));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require('mongoose');
mongoose.connect('mongodb://ravenvl:1q3e5t@ds143330.mlab.com:43330/test1');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('We connected');
});
var bookSchema = mongoose.Schema({
    books:[
        {
            id:Number,
            book: String,
            autor: String,
            year: String,
            cover: String
        }
    ],
    editMode: Number
});
let Book = mongoose.model('Book', bookSchema);


app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.get('/api/books', (req, res) => {
    Book.find({
    }).exec(function(err, books) {
        if (err) throw err;
        console.log(books);
        let initialBook = {books: books[0].books, editMode:books[0].editMode};
        console.log(initialBook);
        res.send(initialBook);
    });
});

app.post('/api/books', (req, res) => {
    let books = req.body;

    Book.updateOne({},books,
        function(err) {
            if (err) throw err;
            console.log('Book successfully saved.');
        });
});


app.put('/api/books/:id', (req, res) => {
    const todo = todos.find(todo => todo.id == req.params.id);

    if (!todo) return res.sendStatus(404);

    todo.title = req.body.title || todo.title;

    res.json(todo);
});

app.patch('/api/todos/:id', (req, res) => {
    const todo = todos.find(todo => todo.id == req.params.id);

    if (!todo) return res.sendStatus(404);

    todo.completed = !todo.completed;

    res.json(todo);
});

app.delete('/api/todos/:id', (req, res) => {
    const index = todos.findIndex(todo => todo.id == req.params.id);

    if (index === -1) return res.sendStatus(404);

    todos.splice(index, 1);

    res.sendStatus(204);
});

// app.get('*', (req, res) => {
//     fs.readFile(`${__dirname}/public/index.html`, (error, html) => {
//         if (error) throw error;
//
//         res.setHeader('Content-Type', 'text/html');
//         res.end(html);
//     });
// });

app.listen(app.get('port'), () => console.log(`Server is listening: http://localhost:${app.get('port')}`));