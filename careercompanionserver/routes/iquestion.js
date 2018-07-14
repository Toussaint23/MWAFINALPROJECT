const routes=require('express').Router();
const mongoose = require ('mongoose');
var question = require('../models/question.js');
const ObjectId=require('mongodb').ObjectID;


routes.get('/questions',(req,res,next)=>{
    question.find({},(err,result)=>{
    if(err) return next(err);
    res.send(JSON.stringify({result}))
});
});
routes.get('/questions/:id',(req,res,next)=>{
   // let ida = {"$oid": req.params.id}
    //question.findById(req.params._id,(err,result)=>
    question.find({"_id":ObjectId(req.params.id)},(err,result)=>
{
    if(err) return next(err);
    res.send(JSON.stringify({result}))
});
});
routes.post('/questions',(req,res,next)=>{
    question.create(req.body,(err,result)=>
{
    if(err) return next(err);
    res.status(200).send(JSON.stringify({message: "OK"}))
});
    
});

module.exports=routes;
