'use strict';

const fs = require('fs');
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

app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.get('/api/books', (req, res) => {
    let reqPath = path.join(__dirname, './books.json');
    fs.readFile(reqPath , 'utf8', function (err, data) {
        if(!err) {
            console.log('Success'+data);
            var jsonObj = JSON.parse(data)
            res.send( jsonObj );
        }else {
            res.send('Error: '+err )
        }
    });
});

app.post('/api/books', (req, res) => {
    let reqPath = path.join(__dirname, './books.json');
    fs.readFile(reqPath , 'utf8', function (err, data) {
        if(!err) {
            console.log('Success'+data);
            var jsonObj = JSON.parse(data)
            res.send( jsonObj );
        }else {
            res.send('Error: '+err )
        }
    });
});


app.put('/api/todos/:id', (req, res) => {
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

app.get('*', (req, res) => {
    fs.readFile(`${__dirname}/public/index.html`, (error, html) => {
        if (error) throw error;

        res.setHeader('Content-Type', 'text/html');
        res.end(html);
    });
});

app.listen(app.get('port'), () => console.log(`Server is listening: http://localhost:${app.get('port')}`));