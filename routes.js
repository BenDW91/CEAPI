var express 	= require('express');
var Event		= require('./model/event');

module.exports = (function() {
    'use strict';
    var api = express.Router();

	api.use(function(req, res, next) {
	    // do logging
	    console.log('Something is happening.');
	    next();
	});

	api.get('/', function(req, res) {
	    res.json({ message: 'hooray! welcome to our api!' });   
	});

	 api.route('/events')
	// 	.post(function(req, res) {
	// 	        var event = new Event();
	// 	        event.name = req.body.name;
	// 	        event.description = req.body.description;

	// 	        event.save(function(err) {
	// 	            if (err)
	// 	                res.send(err);

	// 	            res.json({ message: 'Event created!' });
	// 	        });
		        
	// 	})

	    .get(function(req, res) {
	        Event.find(function(err, events) {
	            if (err)
	                res.send(err);

	            res.json(events);
	        });

	    	console.log('getting the events');
	    });

	api.route('/events/:event_id')
	    .get(function(req, res) {
	        Event.findById(req.params.event_id, function(err, event) {
	            if (err)
	                res.send(err);
	            res.json(event);
	        });
	    	console.log('getting the event with id', req.params.event_id);
	    });

    return api;
})();
