
var mongoose=require('mongoose');


var signupschema=new mongoose.Schema({
    Email:String,
    Password:String,
    RPassword:String
})
var signupModel=new mongoose.model("signup",signupschema,"newUser");
module.exports=signupModel;
