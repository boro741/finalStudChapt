var express = require('express');
var app = express();

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.get('/', function(req,res){

    const msg = {
        to: [{
            "email": "pavanboro14@gmail.com"
        }, {
            "email": "pavanboro16@gmail.com"
        }],
        from: 'pavanboro15@gmail.com',
        subject: 'Testing Sendgrid',
        text: 'Testing Sendgrid',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      };
      sgMail.send(msg, function(err,json){
          if(err){
              return res.send("Error:: Email not Sent!!!");
          }

          return res.send("Email Sent!!!");
      });
});

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function(){
	console.log('Server started on port '+app.get('port'));
});
