const mongoose=require("mongoose");
mongoose.connect('mongodb://localhost:27017/library');

const Schema = mongoose.Schema;
const authorSchema=new Schema({
    name:String,
    about:String,
    country:String,
    image:String
});
const authorData = mongoose.model("authordata",authorSchema);
module.exports=authorData;