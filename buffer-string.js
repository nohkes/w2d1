var https = require('https');

console.log('I did it!');

var options = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
};

// called by https when the request is made.
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

