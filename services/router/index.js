/*eslint-env node, es6 */
'use strict';

module.exports = (app, server) => {
	// path : "http://ROOT/node" handled file routes/myNode.js file
	app.use('/node', require('./routes/myNode')());
};