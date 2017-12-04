
var https = require('https'); 

function getAndPrintHTML (cb) {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  // notice that https.get takes a callback with one parameter -
// response, which is a Stream that represents the HTTP response
https.get(requestOptions, function (response) {
  chunks = []

  // set encoding of received data to UTF-8
  response.setEncoding('utf8');

  // the callback is invoked when a `data` chunk is received
  response.on('data', function (chunk) {
    //console.log(data + '\n');
    chunks.push(chunk);
  });

  // the callback is invoked when all of the data has been received
  // (the `end` of the stream)
  response.on('end', function() {
    console.log('Response stream complete.');
    var html = chunks.join('');
    return cb(html);
  });

});

}

function myCallback(html){
  console.log('HTML:', html);
}
getAndPrintHTML (myCallback);