
var getAHtml = require("./step-5-1");


function printHTML (html) {
  console.log(html);
};
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getAHtml(requestOptions, printHTML);
