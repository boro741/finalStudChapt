var express = require('express');
var router = express.Router();


// Create Event
router.post('/createEvent', function(req,res){
	var eventName = req.body.eventName;
	var description = req.body.description;
	var files = req.body.files;
	var eventDate = req.body.eventDate;
	var mobNo = req.body.mobNo;
	var email = req.body.email;

	
	console.log('Event Name: ',eventName);
	res.render('home');
});

module.exports = router;
