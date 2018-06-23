var express = require('express');
var router = express.Router();
var multer = require('multer');

var Event = require('../models/event');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/posters')
    },
    filename: function (req, file, cb) {
      cb(null,file.originalname);
    }
});
  
var upload = multer({ storage: storage }).single('poster');

// Create Event
router.post('/createEvent', function(req,res){
	var eventName = req.body.eventName;
	var description = req.body.description;
	var poster = req.body.poster;
	var eventDate = req.body.eventDate;
	var mobileNo = req.body.mobileNo;
	var emailId = req.body.emailId;
	var price = req.body.price;

	
	var newEvent = new Event({
		eventName: eventName,
		description: description,
		poster: poster,
		eventDate: eventDate,
		mobileNo: mobileNo,
		emailId: emailId,
		price: price
	});

	Event.createEvent(newEvent, function (err, event) {
	if (err) throw err;
		console.log(event);
	});

	upload(req, res, function (err) {
		if (err) {
		  // An error occurred when uploading
		}
	
		// Everything went fine
		res.json({
			success: true,
			message: 'Image'
		});
	  });

	req.flash('success_msg', 'Event Published');
	res.redirect('/');

	console.log('Event Body: ',req.body);
});

module.exports = router;
