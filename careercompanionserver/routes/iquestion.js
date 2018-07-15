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
<<<<<<< HEAD
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
=======
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
>>>>>>> f5560e0bfdf99dcdfaee1579a1735fbd20b317b0
});
// routes.put('/questions/:id/',(req,res,next)=> {
//     question.findByIdAndUpdate(req.params.id.req.body,(err,result)=> {
//        if(err) return next(err);
//     res.status(200).send(JSON.stringify({message: "OK"}))
//     });    
// });

module.exports=routes;
