const express = require('express');
const authorsRouter = express.Router();
const authorData = require('../model/Bookdata') 

function route2(nav) {
    // var authors = [
    //     {
    //         author : "Lev Nicolayevich",
    //         about : "Lev Nikoláyevich Tolstoy, [O.S. 28 August] 1828 – 20 November [O.S. 7 November] 1910),usually referred to in English as Leo Tolstoy, was a Russian writer who is regarded as one of the greatest authors of all time.[3] He received multiple nominations for the Nobel Prize in Literature every year from 1902 to 1906 and nominations for Nobel Peace Prize in 1901, 1902 and 1910 and the fact that he never won is a major Nobel prize controversy.",
    //         img: "count-lev-nikolayevich.jpg"
    //     },
    //     {
    //         author : "Victor Hugo",
    //         about: "Victor Marie Hugo (26 February 1802) – 22 May 1885) was a French poet, novelist, and dramatist of the Romantic movement. During a literary career that spanned more than sixty years, he wrote abundantly in an exceptional variety of genres: lyrics, satires, epics, philosophical poems, epigrams, novels, history, critical essays, political speeches, funeral orations, diaries, letters public and private, and dramas in verse and prose. Hugo is considered to be one of the greatest and best-known French writers. Outside Fran",
    //         img: "victor-hugo-9346557-1-402.jpg"    
    //     },
    //     {
    //         author: "J.K Rowling",
    //         about: "Joanne Rowling, CH, OBE, HonFRSE, FRCPE, FRSL (/ˈroʊlɪŋ/ ROH-ling;[1] born 31 July 1965), better known by her pen name J. K. Rowling, is a British author, screenwriter, producer, and philanthropist. She is best known for writing the Harry Potter fantasy series, which has won multiple awards and sold more than 500 million copies,[2][3] becoming the best-selling book series in history.[4] The books are the basis of a popular film series, over which Rowling had overall approval on the scripts[5] and was a producer on the final films.[6] She also writes crime fiction under the pen name Robert Galbraith.",
    //         img: "Shot_D_021_V2L-copy-1.jpg"
    //     }
    // ]

    authorsRouter.get('/',function(req, res){
        authorData.find()
        .then(function( authors ){
            res.render("authors",{                                                                      //Here, books means books.ejs
                nav,
                title:'Library',
                authors
        });
        
        })
    })

    authorsRouter.get('/:id',function(req,res) {
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


 return authorsRouter;
}

module.exports = route2;