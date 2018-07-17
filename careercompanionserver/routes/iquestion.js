const routes=require('express').Router();
var question = require('../models/question.js');
const utility = require('./utility');
const ObjectId=require('mongodb').ObjectID;
require ('mongoose');

routes.get('/questions',utility.verifyToken, (req,res,next)=>{
    question.find({},(err,result)=>{
        if(err) return next(err);
        const payload = {
            op: "listing"
        };
        const token = utility.getToken(payload);
        res.send(JSON.stringify({status:200, message: result, token: token}));
    });
});
routes.post('/questions',utility.verifyToken, (req,res,next)=>{
    question.create(req.body,(err,result)=>{
        if(err) return next(err);
        const payload = {
            op: "saving"
        };
        const token = utility.getToken(payload);
        res.send(JSON.stringify({status:200, message: "OK", token: token}));
    });  
});
routes.get('/questions/:id',utility.verifyToken, (req,res,next)=>{
     question.find({"_id":ObjectId(req.params.id)},(err,result)=>{
        if(err) return next(err);
        const payload = {
            op: "listing"
        };
        const token = utility.getToken(payload);
        res.send(JSON.stringify({status:200, message: result, token: token}));
    });
});
routes.put('/questions/:id',utility.verifyToken, (req,res,next)=>{
    let query = {"_id":ObjectId(req.params.id)};
    let update =  { "$push":{"comments":req.body}};

    question.update(query, update, (err, result)=>{
        if (err) return next(err);
        const payload = {
            op: "updating"
        };
        const token = utility.getToken(payload);
        res.send(JSON.stringify({status:201, message: "OK", token: token}));
    });
});

module.exports=routes;
