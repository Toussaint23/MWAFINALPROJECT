const jwt = require('jsonwebtoken');
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./config/properties.file');


class Utility{
    constructor(){}

    mailOptions(receiver, message){
        return{
            from: properties.get('mail.user'), // sender address
            to: receiver, // list of receivers
            subject: 'Checking mail', // Subject line
            html: message// plain text body
        };
    }

    getToken(payload){
        return jwt.sign(payload, "mycode",{expiresIn: '1h' }); //1hour
    }

    verifyToken(req, res, next) {
        const token = req.body.token || req.query.token || req.headers['x-access-token'];
        
        if (!token)
            return res.status(403).send(JSON.stringify({message: 'No token provided.' }));
        jwt.verify(token, "mycode", function(err, decoded) {
            if (err)  res.send(JSON.stringify({status:401, message: err }));
           // res.send(JSON.stringify({status:401, message: 'Failed to authenticate token.' }));
            // if everything good, save to request for use in other routes
            next();
        });
    }
}

module.exports = new Utility();