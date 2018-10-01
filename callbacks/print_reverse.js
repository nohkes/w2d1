var getHTML = require('../step-5-1');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverseCase (html) {

 console.log(html.split("").reverse().join(""))

}

getHTML(requestOptions, printReverseCase);
