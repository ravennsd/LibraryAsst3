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
        var author = authorData(item);                              //saving the structure and model in bookdata.js to the database is done here
        author.save();
        console.log(author);
        res.redirect('/authors');
    
    });

    addAuthorRouter.get('/edit/:id',function(req,res){
     
        const id = req.params.id;
        authorData.findOne({_id: id})
        .then(function(author) { 
            res.render('editAuthor', 
            {                                                                           //Here, books means books.ejs
                nav,
                title:'Library',
                author                                                      // book: books[id]  No need since theres no array anymore        
            }); 
        })  
    })
    addAuthorRouter.post('/edit/:id', (req,res)=>{
            console.log(req.body);
            const id = req.params.id;
            authorData.findByIdAndUpdate({_id:id},
             {
                name: req.body.name,
                about: req.body.about,
                country: req.body.country,
                image: req.body.image                                               
             }
             )
                .then(()=> {
                    res.redirect('/authors');
                    });            
            })                          
    
    
    addAuthorRouter.get('/delete/:id', function(req,res) {
        const id = req.params.id;
        authorData.findByIdAndDelete({_id:id})
        .then(()=>{
            res.redirect('/authors');
        })
    })
    return addAuthorRouter;
}
module.exports = route6;