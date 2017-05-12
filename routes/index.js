var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var message = "Not Received";
  request('http://10.1.1.10/api', function (error, response, body) {
  if (!error && response.statusCode == 200) {

	var params = body.split('|');
	message = params[0] + ' C and ' + params[1] + '% humidity';
	res.render('index', { title: 'Node Three' , message: message });  
  	}    
  	else {
    	console.log("Error "+response.statusCode)
  	}
	});
});

module.exports = router;
