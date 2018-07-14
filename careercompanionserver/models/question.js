let mongoose =require('mongoose');
let QuestionSchema = new mongoose.Schema ({
 lastName:String,
 firstName:String,
 questiontext:String,
 date: {type: Date, default: Date.now},
 comments : [
     {
        firstName:String,
        lastName: String,
        textbody: String,
    }],
 tags:[]
 });

 module.exports=mongoose.model('question', QuestionSchema);
 
 