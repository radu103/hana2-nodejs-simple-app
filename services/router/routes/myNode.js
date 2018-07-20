/*eslint no-console: 0, no-unused-vars: 0, no-shadow: 0, new-cap: 0*/
/*eslint-env node, es6 */
'use strict';

var express = require('express');
var async = require('async');

module.exports = function() {
	
	var app = express.Router();

	app.get('/', function(req, res){
		
		var output = "<h3>Routes</h3>";
		output += `</br><a href="${req.baseUrl}/dummy">/dummy</a> select from dummy</br>`;
		
		res.type('text/html').status(200).send(output);
	});

	app.get('/dummy', function(req, res){
		
		var client = req.db;
		console.log(client);
		
		var query = 'select SESSION_USER from "DUMMY" ';
		client.prepare(query, function(err, statement){
				
			if (err) {
				res.type('text/plain').status(500).send("ERROR: " + err.toString());
				return;
			}
			
			statement.exec([], function(err, results){
					if (err) 
					{
						res.type('text/plain').status(500).send(`ERROR: ${err.toString()}`);
					} 
					else 
					{
						res.type('application/json').status(200).json(results);
					}
				});
		});
	});

	return app;
};