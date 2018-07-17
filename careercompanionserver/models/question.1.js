let mongoose =require('mongoose');
let QuestionSchema = new mongoose.Schema ({
 lastName:{type: String, required: false},
 firstName:{type: String, required: false},
 questiontext:{type: String, required: true},
 date: {type: Date, default: Date.now},
 tags:String,
 company:String,
 comments : [
     {
        firstName:String,
        lastName: String,
        textbody: String,
        date: {type: Date, default: Date.now},
    }]
 });

 module.exports=mongoose.model('question', QuestionSchema);
 
 