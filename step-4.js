var https = require('https');
function getHTML (options, callback) {

		// var callback = function(response) 
		
		https.get(requestOptions, function(response) {
	 		
	 		response.on('data', function(chunk) {
		    var buf = new Buffer(chunk);
		    callback(buf.toString());

		    });	
		  });
	 

}
function printHTML (html) {
  console.log(html);
};
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);
