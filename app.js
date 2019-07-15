var express = require('express');
var app = express();
var mailer = require('express-mailer');
var pug = require('pug');

var port = 8520;

app.set('views',__dirname+'/views');
app.set('view engine','ejs');

mailer.extend(app,{
    from: 'no-reply@hotmail.com',
    host:'smtp.gmail.com',
    secureConnection: true,
    port: 465,
    transportMethod: 'SMTP',
    auth:{
        user: 'poomsuteen@gmail.com',
        pass: 
    }
});

app.get('/', function (req, res, next) {
    app.mailer.send('email2', {
      to: 'nutthapoom.s@hotmail.com', // REQUIRED. This can be a comma delimited string just like a normal email to field. 
      subject: 'Test Email', // REQUIRED.
      otherProperty: 'Other Property' // All additional properties are also passed to the template as local variables.
    }, function (err) {
      if (err) {
        // handle error
        console.log(err);
        res.send('There was an error sending the email');
        return;
      }
      res.send('Email Sent');
    });
  });
app.listen(port,function(){
    console.log("Launch");
})