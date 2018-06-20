var express = require('express');
var router = express.Router();

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		res.redirect('/users/login');
	}
}

// Get Homepage
router.get('/',function(req, res){
	res.render('home');
});

router.get('/dashboard', ensureAuthenticated, function(req, res){
	res.render('dashboard');
});

router.get('/event', ensureAuthenticated, function(req, res){
	res.render('event');
});


module.exports = router;