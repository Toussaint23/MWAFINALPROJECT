const routes=require('express').Router();
var question = require('../models/question.js');
const ObjectId=require('mongodb').ObjectID;
require ('mongoose');

routes.get('/questions',(req,res,next)=>{
    question.find({},(err,result)=>{
        if(err) return next(err);
        res.send(JSON.stringify({result}))
    });
});
routes.post('/questions',(req,res,next)=>{
    question.create(req.body,(err,result)=>{
        if(err) return next(err);
        res.status(200).send(JSON.stringify({message: "OK"}))
    });  
});
routes.get('/questions/:id',(req,res,next)=>{
     question.find({"_id":ObjectId(req.params.id)},(err,result)=>{
        if(err) return next(err);
        res.send(JSON.stringify({result}))
    });
});
routes.put('/questions/:id',(req,res,next)=>{
    let query = {"_id":ObjectId(req.params.id)};
    let update =  { "$push":{"comments":req.body}};

    question.update(query, update, (err, result)=>{
        if (err) return next(err);

        res.status(201).send(JSON.stringify({message:"OK"}));
    });
});

module.exports=routes;
