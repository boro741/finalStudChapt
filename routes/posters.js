var express = require('express');
var router = express.Router();
var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/posters')
    },
    filename: function (req, file, cb) {
      cb(null,file.originalname);
    }
  })
  
var upload = multer({ storage: storage }).single('poster');

router.post('/', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      // An error occurred when uploading
    }

	// Everything went fine
	res.json({
		success: true,
		message: 'Image'
	});
  })
});


module.exports = router;