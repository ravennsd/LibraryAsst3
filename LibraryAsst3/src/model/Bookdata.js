const mongoose = require( "mongoose");
mongoose.connect('mongodb://localhost:27017/library');    //Connceting to mongoose database (predifined). Named it as library

const Schema = mongoose.Schema;

const bookSchema = new Schema ({
    title: String,
    author: String,
    genre: String,
    image: String
});

const Bookdata = mongoose.model('bookdata', bookSchema);      // Converting schema to model with this code ('collection-name', schema name)

module.exports = Bookdata;