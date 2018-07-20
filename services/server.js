/*eslint no-console: 0*/
"use strict";

var xsHDBConn = require('@sap/hdbext');
var xssec = require('@sap/xssec');
var xsenv = require('@sap/xsenv');

var services = xsenv.getServices({
	hana : {
		tag: 'hana'
	}
});
//console.log(services);

var logging = require('@sap/logging');
var appContext = logging.createAppContext();

// for now without uua service
// var passport = require('passport');
// passport.use('JWT', new xssec.JWTStrategy(xsenv.getServices({
// 	uaa: {
// 		tag: 'xsuaa'
// 	}
// }).uaa));

var express = require('express');
var app = express();

app.use(logging.expressMiddleware(appContext));
app.use(xsHDBConn.middleware(services.hana));
//app.use(passport.initialize());

var port = process.env.PORT || 3000;
var server = require('http').createServer();
var router = require('./router')(app, server);

server.on('request', app);

server.listen(port, function() {
	console.info("HTTP Server on port : ", port);
});
