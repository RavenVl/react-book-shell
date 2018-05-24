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
            book: String,
            autor: String,
            year: String,
            cover: String,
            id:Number
        }
    ],
    editMode: Number
});
let Book = mongoose.model('Book', bookSchema);
let book1 = new Book ({
    books: [{
        book: 'Some book1',
        autor: 'Some autor1',
        year: '19841node testMon',
        cover: 'https://static.kulturologia.ru/files/u1866/alternative_bookcovers_4.jpg',
        id: 0
    }],
    editMode: -1
});
// book1.save(function(err) {
//     if (err) throw err;
//     console.log('Book successfully saved.');
//     Book.find({}).exec(function(err, books) {
//         if (err) throw err;
//         let initialBook = {books: books[0].books, editMode:books[0].editMode};
//         console.log(initialBook);
//         process.exit();
//     });
// });

Book.updateOne({},{
        books: [{
            book: 'Some book12',
            autor: 'Some autor12',
            year: '1984',
            cover: 'https://static.kulturologia.ru/files/u1866/alternative_bookcovers_4.jpg',
            id: 0
        }],
        editMode: -1
    },
    function(err) {
     if (err) throw err;
      console.log('Book successfully saved.');

});


