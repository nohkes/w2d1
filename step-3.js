var https = require('https');
function getAndPrintHTML (options) {

  /* Add your code here */

var callback = function(response) {
  console.log('In response handler callback!');
	
  response.on('data', function(chunk) {
    console.log('[-- CHUNK OF LENGTH ' + chunk.length + ' --]');
    var buf = new Buffer(chunk);
    console.log(buf.toString());

  });
}

console.log("I'm about to make the request!");

https.get(options, callback).end();
 
console.log("I've made the request!");


}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);
