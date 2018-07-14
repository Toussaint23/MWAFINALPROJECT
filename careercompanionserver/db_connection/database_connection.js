var mongoose = require('mongoose');
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./config/properties.file');
var connection=properties.get('db.connection');

var con=mongoose.connect(connection, {useNewUrlParser:true})
.then(() =>console.log('connection successful'))
.catch((err) => console.error(err)); 

module.exports=con;
