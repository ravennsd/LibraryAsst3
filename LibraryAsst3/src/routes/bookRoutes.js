const express = require('express');
const booksRouter = express.Router();
const Bookdata = require('../model/Bookdata');
function router(nav) {
    // var books = [
    //     { 
    //     title: "War and Peace",
    //     author: "Lev Nicolayevich",
    //     genre:'Historical Fiction',
    //     img: "count-lev-nikolayevich.jpg"
    // },
    // { 
    //     title: "Les Miserables",
    //     author: "Victor Hugh",
    //     genre:'Fiction',
    //     img: "victor-hugo-9346557-1-402.jpg"
    // },
    // { 
    //     title: "Harry Potter",
    //     author: "J.K Rowling",
    //     genre:'Fantasy',
    //     img: "Shot_D_021_V2L-copy-1.jpg"
    // }
    // ]
    
    booksRouter.get('/',function(req, res){
        Bookdata.find()
        .then(function( books ){
            res.render("books",{                                                                           //Here, books means books.ejs
                nav,
                title:'Library',
                books
        });
        
        })
    })
    booksRouter.get('/:id',function(req,res) {
        const id = req.params.id;
        Bookdata.findOne({_id: id})
        .then(function(book) { 
            res.render('book', 
            {                                                                           //Here, books means books.ejs
                nav,
                title:'Library',
                book                                                       // book: books[id]  No need since theres no array anymore        
            }); 
        })  
    })
    
    // booksRouter.get('/delete/:id',function(req,res) {
    //     const id = req.params.id;
    //     var del = Bookdata.findOneAndDelete({_id: id})
    //     .then(function(books) { 
    //         res.render('books', 
    //         {                                                                           //Here, books means books.ejs
    //             nav,
    //             title:'Library',
    //             books                                                       // book: books[id]  No need since theres no array anymore        
    //         }); 
    //     })  
    // }) 

    return booksRouter;
}

module.exports = router;
