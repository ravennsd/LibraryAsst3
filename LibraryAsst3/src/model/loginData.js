var mongoose=require('mongoose');
var userschema=new mongoose.Schema({
    Username:String,
    Password:String
})
var userData=new mongoose.model("user",userschema,"userLogin");
module.exports=userData;