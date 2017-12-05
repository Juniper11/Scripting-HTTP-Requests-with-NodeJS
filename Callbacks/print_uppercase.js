var https = require('https'); 
var getHTML = require('./http-functions');



function htmltoCAPS(html) {
//html = "hello";
html= html.toUpperCase();
console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, htmltoCAPS);