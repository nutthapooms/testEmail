var express = require('express');
var app = express();
var mailer = require('express-mailer');


var port = 8520;

mailer.extend(app,{
    from: 'no-reply@hotmail.com',
    host:'smtp.gmail.com',
    secureConnection: true,
    port:465,
    transportMethod: 'SMTP',
    auth:{
        user: 'poomsuteen@gmail.com',
        pass: 'lpg6jwu33d'
    }
});
app.listen(port,function(){
    console.log("Launch");
})