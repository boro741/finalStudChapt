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

router.get('/test', ensureAuthenticated, function(req, res){
	res.render('test');
});


module.exports = router;