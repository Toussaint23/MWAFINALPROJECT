const routes=require('express').Router();
const nodemailer = require('nodemailer');
var randomize = require('randomatic');
const utility = require('./utility');
var student = require('../models/student.js');
require ('mongoose');

var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./config/properties.file');
const transporter = nodemailer.createTransport({
    service: properties.get('mail.service'),
    auth: {
           user: properties.get('mail.user'),
           pass: properties.get('mail.pass')
       }
   });

routes.get('/login/:id',(req,res,next)=>{
    student.find({"_id":req.params.id},(err,result)=>{
       if(err) return next(err);
       if(result.length === 0){
            res.send(JSON.stringify({status:401, message:'Authentication failed'}));
        }
        else{
            const payload = {
                id: result[0]._id,
                lastname: result[0].lastName,
                firstname: result[0].firstName,
                status:result[0].status,
                email:result[0].mail
            };

            const token = utility.getToken(payload);
            const receiver = result[0].mail;
            const code = randomize('0', 6);

            const message = `<p>Hello ${result[0].firstName} ${result[0].lastName},<br/> Your Confirmation code is : ${code}</p>`;
            const mailOption = utility.mailOptions(receiver, message);
           
            transporter.sendMail(mailOption, function (err, info) {
                if(err)
                    res.send(JSON.stringify({status:500, message:'Authentication failed'}));
                else
                  res.send(JSON.stringify({status:200, message:code, token: token}));
             });
        }
   });
});
routes.post('/student/saving',utility.verifyToken, (req,res,next)=>{
    student.create(req.body.value,(err,result)=>{
        if(err) return next(err);
        const payload = {
            op: "saving"
        };
        const token = utility.getToken(payload);
        res.send(JSON.stringify({status:200, message: "Operation done", token: token}));
    });  
});
routes.get('/students',utility.verifyToken, (req,res,next)=>{
    student.find({},(err,result)=>{
        if(err) return next(err);
        const payload = {
            op: "listing"
        };
        const token = utility.getToken(payload);
        res.send(JSON.stringify({status:200, message: result, token: token}));
    });
});
routes.get('/students/:status',utility.verifyToken, (req,res,next)=>{
    student.find({"status":req.params.status},(err,result)=>{
       if(err) return next(err);
       const payload = {
        op: "listing"
    };
    const token = utility.getToken(payload);
    res.send(JSON.stringify({status:200, message: result, token: token}));
   });
});
routes.put('/student/:id',utility.verifyToken, (req,res,next)=>{
    let query = {"_id":req.params.id};
    let update =  { "status":"hired", "$push":{"details_employment":req.body.value}};

    student.update(query, update, (err, result)=>{
        if (err) return next(err);
        const payload = {
            op: "updating"
        };
        const token = utility.getToken(payload);
        res.send(JSON.stringify({status:201, message: "OK", token: token}));
    });
});

module.exports=routes;