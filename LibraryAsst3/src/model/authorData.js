const mongoose=require("mongoose");
mongoose.connect('mongodb://localhost:27017/library');

const Schema = mongoose.Schema;
const authorSchema=new Schema({
    Name:String,
    About:String,
    Country:String,
    Image:String
});
const authorData = mongoose.model("authordata",authorSchema);
module.exports=authorData;