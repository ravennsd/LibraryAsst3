const express= require("express");
// const adminRouter = express.Router;
const adminRouter =express.Router();
const Bookdata = require('../model/Bookdata')  ;
const authorData = require('../model/authorData')    ;       //path of bookData.js with /..model/Bookdata

function route5(nav){
adminRouter.get('/', (req,res)=> {
    res.render("addBook",{                                //addBook.ejs
    nav,                                                                          
    title:'Library' 
    })                       
})
adminRouter.post('/add',(req,res)=> {
    
    var item = { 
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    image: req.body.image                                   //as object
    }
    var book = Bookdata(item);                              //saving the structure and model in bookdata.js to the database is done here
    book.save();
    res.redirect('/books');

});


adminRouter.get('/edit/:id',function(req,res){
     
    const id = req.params.id;
    Bookdata.findOne({_id: id})
    .then(function(book) { 
        res.render('editBook', 
        {                                                                           //Here, books means books.ejs
            nav,
            title:'Library',
            book                                                       // book: books[id]  No need since theres no array anymore        
        }); 
    })  
})
adminRouter.post('/edit/:id', (req,res)=>{
        console.log(req.body);
        const id = req.params.id;
        Bookdata.findByIdAndUpdate({_id:id},
         {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            image: req.body.image                                               
         }
         )
            .then(()=> {
                res.redirect('/books');
                });            
        })                          


adminRouter.get('/delete/:id', function(req,res) {
    const id = req.params.id;
    Bookdata.findByIdAndDelete({_id:id})
    .then(()=>{
        res.redirect('/books');
    })
})

       
return adminRouter;

}

module.exports = route5;