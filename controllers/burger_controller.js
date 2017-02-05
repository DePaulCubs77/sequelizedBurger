// Code for HTML routing 
var express = require('express');

// Router for app 
var router = express.Router();

// Requires models folder
var db = require('../models');

// // Import burger.js to use its databaase function
// var burger = require('../models/burger.js');

// Create our routes and set up the logic within those routes when required
router.get('/', function(req, res) {
	db.burger.findAll({}).then(function(dbPost) {
		var hbsObject = {
			burgers: dbPost
		};
		// console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

router.post('/', function (req, res) {
	db.burgers.create({
		burger_name: req.body.burger_name,
	}).then(function(dbPost) {
			res.redirect('/');
		});
});

router.put('/:id', function(req, res) {
	var condition = 'id = ' + req.params.id;
	console.log('condition', condition);

	burger.update({
		'devour': req.body.devour
	}, condition, function() {
		res.redirect("/");
	});
});

// Export the routes
module.exports = router;