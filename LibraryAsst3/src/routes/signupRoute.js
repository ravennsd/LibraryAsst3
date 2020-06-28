const express = require('express');
const signupRouter = express.Router();
const { userdb } = require("../model/userData");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

function route3(nav) {
   
signupRouter.get('/',function(req, res){
    res.render("signup",{ 
        nav,                                                                          
        title:'Library',
    })
})

signupRouter.post("/", function (req, res) {
  console.log(req.body)
  bcrypt.hash(req.body.pwd, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({
        error: err,
      });
    } else {
      console.log(req.body.email);
      userdb
        .find({ email: req.body.email })
        .exec()
        .then((user) => {
          console.log(user);
          if (user.length >= 1) {
            return res.status(409).json({
              message: "Email already exists",
            });
          } else {
            var data = {
                name: req.body.name,
                email:req.body.email,
                dob:req.body.dob,
                pwd: req.body.pwd,
                ph:req.body.ph,
                gender:  req.body.gender
            } 
            console.log(data);
            userdb(data)
              .save()
              .then(() => {
                return res.status(200).json({
                  message: "Signup successful",
                  redirect:true
                });
               
              });
          }
        });
    }
  });
});



 return signupRouter;
}

module.exports = route3;