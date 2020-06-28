var mongoose=require('mongoose');
const user=new mongoose.Schema({
    name:String, 
    email:String, 
    pwd:String, 
    date:String,
    ph:String,
    gender:String
})

const User=mongoose.model('user',user);

module.exports={userdb:User};