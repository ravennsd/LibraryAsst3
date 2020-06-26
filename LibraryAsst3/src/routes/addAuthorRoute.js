const express= require("express");

const addAuthorRouter =express.Router();
const authorData = require('../model/authorData')    ; 

function route6(nav) {
    addAuthorRouter.get('/', (req,res)=> {
        res.render("addAuthor",{                                //addAuthors.ejs
        nav,                                                                          
        title:'Library' 
        })                       
    })
    addAuthorRouter.post('/add', (req,res) =>{
        
        var item = { 
        name: req.body.name,
        about: req.body.about,
        country: req.body.country,
        image: req.body.image                                   //as object
        }
        var book = authorData(item);                              //saving the structure and model in bookdata.js to the database is done here
        book.save();
        res.redirect('/authors');
    
    });
    return addAuthorRouter;
}
module.exports = route6;