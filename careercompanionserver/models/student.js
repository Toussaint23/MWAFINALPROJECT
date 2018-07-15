let mongoose =require('mongoose');
require('mongoose-type-email');

let StudentSchema = new mongoose.Schema ({
 _id:{type: String, required: true},
 lastName:{type: String, required: true},
 firstName:{type: String, required: true},
 status:{type: String, default: 'candidate'},
 mail: {type: mongoose.SchemaTypes.Email, required: true},
 country:{type: String, required: true},
 gender:{type: String, required: true},
 details_employment : [
     {
        position:{type: String, default: 'N/A'},
        company:{
            name: {type: String, default: 'N/A'},
            state:{type: String, default: 'N/A'},
            city:{type: String, default: 'N/A'},
        },
        recruiter:{
            name: {type: String, default: 'N/A'},
            state:{type: String, default: 'N/A'},
            city:{type: String, default: 'N/A'},
        },
        date: {type: Date, default: Date.now},
    }]
 });

 module.exports=mongoose.model('student', StudentSchema);
 
 