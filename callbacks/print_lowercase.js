var getHTML = require('../step-5-1');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowerCase (html) {

 console.log(html.toLowerCase())

}

getHTML(requestOptions, printLowerCase);
