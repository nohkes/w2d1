var https = require('https');

module.exports = function getHTML (options, callback) {
    
	https.get(options, function(response) {
	 		
	 	response.on('data', function(chunk) {
		var buf = new Buffer(chunk);
		callback(buf.toString());

		  });	
	});

};
