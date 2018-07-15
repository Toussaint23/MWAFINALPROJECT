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
 //   question.findById({"_id":req.params.id},(err,result)=>
  //  const uid=ObjectId(req.params.id)
 //   question.findById({ "": { "$oid":req.params.id}},(err,result)=>
 question.findOne({ "email":req.params.email},(err,result)=>
        {
            if(err) return next(err);
            res.send(JSON.stringify({result}))
        });
});
routes.post('/questions',(req,res,next)=> {
        question.create(req.body,(err,result)=> {
           if(err) return next(err);
        res.status(200).send(JSON.stringify({message: "OK"}))
        });    
});

routes.delete('/questions/:id',(req,res,next)=> {
    question.findByIdAndRemove(req.params.id,req.body,(err,result)=> {
       if(err) return next(err);
   // res.status(200).send(JSON.stringify({message: "OK"}))
   res.json(result)
    });    
});

routes.put('/questions/:id',(req,res,next)=> {
    question.findByIdAndUpdate(req.params.id.req.body,(err,result)=> {
       if(err) return next(err);
    res.status(200).send(JSON.stringify({message: "OK"}))
    });    
});
// routes.put('/questions/:id/',(req,res,next)=> {
//     question.findByIdAndUpdate(req.params.id.req.body,(err,result)=> {
//        if(err) return next(err);
//     res.status(200).send(JSON.stringify({message: "OK"}))
//     });    
// });

module.exports=routes;
