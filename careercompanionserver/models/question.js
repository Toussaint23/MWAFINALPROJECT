let mongoose =require('mongoose');
let QuestionSchema = new mongoose.Schema ({
 
 category:{type: String, required: false},
 companyname:{type: String, default: 'N/A'},
 questiontext:{type: String, required: true},
 date: {type: Date, default: Date.now},
 
 comments : [
     {
        firstName:{type: String, default: 'N/A'},
        lastName: {type: String, default: 'N/A'},
        textbody: {type: String, default: 'N/A'},
        date: {type: Date, default: Date.now},
    }]
 });

 module.exports=mongoose.model('question', QuestionSchema);
 
 