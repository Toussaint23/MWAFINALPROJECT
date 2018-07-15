const routes=require('express').Router();
var student = require('../models/student.js');
require ('mongoose');

routes.post('/student/saving',(req,res,next)=>{
    student.create(req.body,(err,result)=>{
        if(err) return next(err);
        res.status(200).send(JSON.stringify({message: "OK"}));
    });  
});
routes.get('/students',(req,res,next)=>{
    student.find({},(err,result)=>{
        if(err) return next(err);
        res.send(JSON.stringify({result}));
    });
});
routes.get('/student/:id',(req,res,next)=>{
     student.find({"_id":req.params.id},(err,result)=>{
        if(err) return next(err);
        res.send(JSON.stringify({result}));
        next();
    });
});
routes.get('/students/:status',(req,res,next)=>{
    student.find({"status":req.params.status},(err,result)=>{
       if(err) return next(err);
       res.send(JSON.stringify({result}))
   });
});
routes.put('/student/:id',(req,res,next)=>{
    let query = {"_id":req.params.id};
    let update =  { "status":"hired", "$push":{"details_employment":req.body}};

    student.update(query, update, (err, result)=>{
        if (err) return next(err);

        res.status(201).send(JSON.stringify({message:"OK"}));
    });
});

module.exports=routes;
