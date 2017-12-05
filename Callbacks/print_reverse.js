var https = require('https'); 
var getHTML = require('./http-functions');



function reverseString(html) {
//html = "hello";
  html = html.split().reverse();
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, reverseString);